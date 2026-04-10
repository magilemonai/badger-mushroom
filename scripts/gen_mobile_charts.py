"""Generate portrait/square mobile variants of blog charts to match site colors."""
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import matplotlib as mpl
import os

# Site color palette
CREAM = '#FAF7F2'
LINEN = '#F0EBE3'
CHARCOAL = '#2C2C2C'
WARM_GRAY = '#6B6560'
SAGE = '#7A9E7E'
FOREST = '#4A7C59'
MUTED_SAGE = '#B5C9B3'
SAGE_WASH = '#E8F0E8'
TAUPE = '#D6D0C8'
TERRACOTTA = '#C4896E'

mpl.rcParams.update({
    'figure.facecolor': CREAM,
    'axes.facecolor': CREAM,
    'axes.edgecolor': TAUPE,
    'axes.labelcolor': CHARCOAL,
    'axes.titlecolor': CHARCOAL,
    'text.color': CHARCOAL,
    'xtick.color': WARM_GRAY,
    'ytick.color': WARM_GRAY,
    'grid.color': TAUPE,
    'grid.alpha': 0.4,
    'font.family': 'DejaVu Sans',
    'font.size': 11,
    'axes.spines.top': False,
    'axes.spines.right': False,
    'axes.grid': True,
    'axes.axisbelow': True,
})

OUT_DIR = '/home/user/badger-mushroom/public/blog'
# Portrait 4:5 ratio for mobile, high DPI
DPI = 150
MOBILE_SIZE = (6.4, 8)  # inches -> 960x1200px at 150dpi

def save(fig, name):
    """Save with PIL reconversion to WebP."""
    tmp_png = f'/tmp/{name}.png'
    fig.savefig(tmp_png, dpi=DPI, bbox_inches='tight', facecolor=CREAM, edgecolor='none')
    plt.close(fig)

    from PIL import Image
    img = Image.open(tmp_png)
    if img.mode == 'RGBA':
        bg = Image.new('RGB', img.size, CREAM)
        bg.paste(img, mask=img.split()[3])
        img = bg

    # Save full-size WebP
    img.save(f'{OUT_DIR}/{name}.webp', 'WEBP', quality=88, method=6)
    # Save smaller version for the -sm variant
    w, h = img.size
    sm_w = min(600, w)
    sm_h = int(h * sm_w / w)
    sm = img.resize((sm_w, sm_h), Image.LANCZOS)
    sm.save(f'{OUT_DIR}/{name}-sm.webp', 'WEBP', quality=85, method=6)

    full_sz = os.path.getsize(f'{OUT_DIR}/{name}.webp')
    sm_sz = os.path.getsize(f'{OUT_DIR}/{name}-sm.webp')
    print(f"  {name}: {full_sz//1024}KB (full) / {sm_sz//1024}KB (mobile)")
    os.remove(tmp_png)


# ============================================================
# Chart 1 (mobile): Major model releases — vertical timeline
# (Original file: q1-2026-benchmark-performance.webp contains this)
# ============================================================
def chart_model_releases_mobile():
    fig, ax = plt.subplots(figsize=MOBILE_SIZE)

    # Data: (month_week, lab, label)
    releases = [
        ('Jan 29', 'Anthropic', 'Skills guide'),
        ('Feb 5',  'Anthropic', 'Claude Opus 4.6'),
        ('Feb 5',  'OpenAI',    'GPT-5.3 Codex'),
        ('Feb 17', 'Anthropic', 'Claude Sonnet 4.6'),
        ('Feb 19', 'Google',    'Gemini 3.1 Pro'),
        ('~Mar 3', 'DeepSeek',  'Architecture Verification'),
        ('Mar 5',  'OpenAI',    'GPT-5.4 full'),
        ('Mar 11', 'OpenAI',    'GPT-5.1 retired'),
        ('Mar 17', 'OpenAI',    'GPT-5.4 mini free tier'),
        ('Mar 31', 'xAI',       'Grok 4.20'),
    ]

    colors = {
        'Anthropic': FOREST,
        'Google':    '#4A6FA5',
        'xAI':       '#555555',
        'DeepSeek':  TERRACOTTA,
        'OpenAI':    SAGE,
        'Other':     TAUPE,
    }

    ax.set_xlim(0, 10)
    ax.set_ylim(-0.5, len(releases) - 0.5)
    ax.invert_yaxis()

    # Vertical spine line
    ax.plot([1.2, 1.2], [-0.3, len(releases) - 0.7], color=TAUPE, linewidth=2, zorder=1)

    for i, (date, lab, label) in enumerate(releases):
        color = colors[lab]
        # Dot
        ax.scatter(1.2, i, s=180, color=color, zorder=3, edgecolors=CREAM, linewidths=1.5)
        # Date
        ax.text(0.1, i, date, fontsize=10, color=WARM_GRAY, ha='left', va='center',
                fontfamily='DejaVu Sans')
        # Label
        ax.text(1.9, i, label, fontsize=12, color=CHARCOAL, ha='left', va='center',
                fontweight='bold')
        # Lab tag
        ax.text(1.9, i + 0.28, lab, fontsize=9, color=color, ha='left', va='center',
                fontweight='bold')

    # Title
    ax.text(0.5, -1.2, 'Q1 2026 Major Model Releases',
            fontsize=16, fontweight='bold', color=CHARCOAL,
            transform=ax.transData, ha='left')
    ax.text(0.5, -0.85, '271 total releases in 90 days. Only flagships shown.',
            fontsize=10, color=WARM_GRAY,
            transform=ax.transData, ha='left')

    ax.set_ylim(len(releases) - 0.3, -1.5)
    ax.axis('off')

    # Footer
    fig.text(0.5, 0.02, 'Sources: devFlokers tracker, OpenAI, Anthropic',
             fontsize=8, color=WARM_GRAY, ha='center', style='italic')
    save(fig, 'q1-2026-benchmark-performance-mobile')


# ============================================================
# Chart 2 (mobile): Benchmark performance (MMLU vs HLE)
# (Original file: q1-2026-model-releases-timeline.webp contains this)
# ============================================================
def chart_benchmark_performance_mobile():
    fig, ax = plt.subplots(figsize=MOBILE_SIZE)

    # MMLU: plateaued around 90%
    mmlu_dates = ['2021', '2022', '2023', '2024', '2025', '2026']
    mmlu_vals  = [35,     60,     87,     88,     90,     93]

    # Humanity's Last Exam: climbing
    hle_dates = ['2024-Q4', '2025-Q1', '2025-Q2', '2025-Q3', '2025-Q4', '2026-Q1']
    hle_vals  = [4,          8,         18,        25,        35,        53]

    x_m = range(len(mmlu_dates))
    x_h = range(len(hle_dates))

    ax.plot(x_m, mmlu_vals, color=FOREST, linewidth=3, marker='o', markersize=8,
            label='MMLU', zorder=3)
    ax.plot(x_h, hle_vals, color=TERRACOTTA, linewidth=3, marker='o', markersize=8,
            label="Humanity's Last Exam", zorder=3)

    # Plateau annotation on MMLU - positioned to not overlap
    ax.annotate('plateaued\nat ~90%', xy=(4, 90), xytext=(4.4, 72),
                fontsize=10, color=FOREST, ha='left',
                arrowprops=dict(arrowstyle='->', color=FOREST, lw=1.2,
                                connectionstyle='arc3,rad=0.2'))

    # Rising annotation on HLE - to the left, below the line
    ax.annotate("4% → 53%\nin 12 months", xy=(4.5, 42), xytext=(1.8, 42),
                fontsize=10, color=TERRACOTTA, ha='left',
                arrowprops=dict(arrowstyle='->', color=TERRACOTTA, lw=1.2,
                                connectionstyle='arc3,rad=-0.2'))

    ax.set_ylabel('Benchmark score (%)', fontsize=11, color=CHARCOAL)
    ax.set_xticks(x_m)
    ax.set_xticklabels(mmlu_dates, fontsize=10)
    ax.set_ylim(0, 100)
    ax.yaxis.set_major_formatter(mpl.ticker.PercentFormatter())
    ax.set_title('Two benchmarks, two trajectories',
                 fontsize=16, fontweight='bold', pad=25, color=CHARCOAL, loc='left')

    # Custom legend positioned inside
    ax.legend(loc='upper left', frameon=True, facecolor=CREAM, edgecolor=TAUPE,
              fontsize=10, framealpha=0.95)

    # Subtitle
    fig.text(0.14, 0.91,
             'MMLU hit the ceiling. Humanity\'s Last Exam replaced it — and is climbing fast.',
             fontsize=10, color=WARM_GRAY, style='italic')

    # Footer
    fig.text(0.5, 0.02, 'Source: Epoch AI (CC-BY)',
             fontsize=8, color=WARM_GRAY, ha='center', style='italic')

    plt.tight_layout(rect=[0, 0.04, 1, 0.88])
    save(fig, 'q1-2026-model-releases-timeline-mobile')


# ============================================================
# Chart 3 (mobile): Q1 Build Timeline
# ============================================================
def chart_build_timeline_mobile():
    fig, ax = plt.subplots(figsize=MOBILE_SIZE)

    projects = [
        ('Late Jan', 'Trivia app',      'First repo, first terminal',      '#B5C9B3'),
        ('Mid Feb',  'Valisar',         '14 hours, 8 sessions, original music', SAGE),
        ('Late Feb', 'Last Light',      'Published, people played it',     FOREST),
        ('Early Mar','Content system',  '7 interconnected files, self-improving', '#3D6B4A'),
        ('Mid Mar',  'Personal website','Public artifact',                 TERRACOTTA),
        ('Late Mar', 'Skill-agents',    'Workflow automation',             '#A06A4F'),
    ]

    for i, (when, title, desc, color) in enumerate(projects):
        y = len(projects) - i - 1
        # Card background
        rect = mpatches.FancyBboxPatch(
            (0.3, y - 0.35), 9.4, 0.7,
            boxstyle="round,pad=0.02,rounding_size=0.1",
            facecolor=color, edgecolor='none', alpha=0.95,
        )
        ax.add_patch(rect)
        # When label
        ax.text(0.55, y + 0.18, when.upper(), fontsize=8, color=CREAM,
                fontweight='bold', ha='left', va='center')
        # Title
        ax.text(0.55, y - 0.05, title, fontsize=14, color=CREAM,
                fontweight='bold', ha='left', va='center')
        # Description
        ax.text(0.55, y - 0.25, desc, fontsize=9, color=CREAM,
                ha='left', va='center', alpha=0.9)

    ax.set_xlim(0, 10)
    ax.set_ylim(-0.8, len(projects) + 0.5)
    ax.axis('off')

    # Title
    ax.text(5, len(projects) + 0.2, 'My Q1 Build Timeline',
            fontsize=18, fontweight='bold', color=CHARCOAL, ha='center')
    ax.text(5, len(projects) - 0.2, 'January: never opened a terminal.',
            fontsize=10, color=WARM_GRAY, ha='center', style='italic')
    # Bottom text
    ax.text(5, -0.5, 'March: running a self-improving content system.',
            fontsize=10, color=WARM_GRAY, ha='center', style='italic')

    save(fig, 'q1-2026-build-timeline-mobile')


# ============================================================
# Chart 4 (mobile): Tech layoffs
# ============================================================
def chart_tech_layoffs_mobile():
    fig, ax = plt.subplots(figsize=MOBILE_SIZE)

    companies = [
        ('Oracle',       30000),
        ('Amazon',       16000),
        ('Dell',         11000),
        ('Block',         4000),
        ('WiseTech',      2000),
        ('Ericsson',      1600),
        ('Epic Games',    1000),
        ('Salesforce',    1000),
        ('Livspace',      1000),
    ]

    names = [c[0] for c in companies]
    values = [c[1] for c in companies]

    y_pos = range(len(names))
    bars = ax.barh(y_pos, values, color=FOREST, height=0.65, edgecolor='none')
    ax.invert_yaxis()

    # Value labels
    for i, v in enumerate(values):
        label = f'{v:,}'
        ax.text(v + max(values) * 0.015, i, label, va='center', fontsize=10,
                color=CHARCOAL, fontweight='bold')

    ax.set_yticks(y_pos)
    ax.set_yticklabels(names, fontsize=11)
    ax.set_xlim(0, max(values) * 1.22)
    ax.set_xticks([0, 10000, 20000, 30000])
    ax.set_xticklabels(['0', '10k', '20k', '30k'], fontsize=9)
    ax.set_xlabel('Headcount reduction', fontsize=10, color=WARM_GRAY)

    # Grid only on x
    ax.grid(True, axis='x', alpha=0.3)
    ax.grid(False, axis='y')

    # Title
    ax.set_title('Q1 2026 Tech Layoff Wave',
                 fontsize=17, fontweight='bold', pad=30, color=CHARCOAL, loc='left')
    fig.text(0.12, 0.91,
             'Over 80,000 total cuts. 20% explicitly tied to AI reallocation.',
             fontsize=10, color=WARM_GRAY, style='italic')

    # Footer
    fig.text(0.5, 0.02, 'Source: NotebookLM / company filings',
             fontsize=8, color=WARM_GRAY, ha='center', style='italic')

    plt.tight_layout(rect=[0, 0.04, 1, 0.88])
    save(fig, 'q1-2026-tech-layoffs-mobile')


# ============================================================
# Chart 5 (mobile): Data center electricity
# ============================================================
def chart_data_center_electricity_mobile():
    fig, ax = plt.subplots(figsize=MOBILE_SIZE)

    # (region, current%, projected%, projected_label)
    regions = [
        ('Virginia',       26,  None,  ''),
        ('Ireland',        21,  32,    '32% by EOY 2026'),
        ('U.S. National',  4.4, 12,    '7–12% by 2028'),
        ('Global',         1.5, 3,     '~3% by 2030'),
    ]

    names = [r[0] for r in regions]
    current = [r[1] for r in regions]
    projected = [r[2] if r[2] else r[1] for r in regions]

    y_pos = list(range(len(names)))
    h = 0.32
    # Projected (behind) in lighter shade
    ax.barh([y - h/2 for y in y_pos], projected, height=h, color=MUTED_SAGE,
            label='Projected', edgecolor='none')
    # Current (front) in forest
    ax.barh([y + h/2 for y in y_pos], current, height=h, color=FOREST,
            label='Current', edgecolor='none')

    ax.invert_yaxis()

    # Labels on current bars
    for i, v in enumerate(current):
        ax.text(v + 0.5, i + h/2, f'{v}%', va='center', fontsize=10,
                color=CHARCOAL, fontweight='bold')
    # Labels on projected where different
    for i, (r, c, p, lbl) in enumerate(regions):
        if p and p != c:
            ax.text(p + 0.5, i - h/2, f'{p}%', va='center', fontsize=9,
                    color=WARM_GRAY)

    ax.set_yticks(y_pos)
    ax.set_yticklabels(names, fontsize=12)
    ax.set_xlim(0, 38)
    ax.set_xlabel('% of total electricity consumption', fontsize=10, color=WARM_GRAY)
    ax.xaxis.set_major_formatter(mpl.ticker.PercentFormatter())

    ax.grid(True, axis='x', alpha=0.3)
    ax.grid(False, axis='y')
    ax.legend(loc='lower right', frameon=True, facecolor=CREAM,
              edgecolor=TAUPE, fontsize=10, framealpha=0.95)

    ax.set_title('Where the power goes',
                 fontsize=17, fontweight='bold', pad=30, color=CHARCOAL, loc='left')
    fig.text(0.12, 0.91,
             'In Virginia, data centers use more electricity than\nevery other commercial & industrial user combined.',
             fontsize=10, color=WARM_GRAY, style='italic')

    fig.text(0.5, 0.02, 'Sources: IEA, Pew, Lawrence Berkeley Lab',
             fontsize=8, color=WARM_GRAY, ha='center', style='italic')

    plt.tight_layout(rect=[0, 0.04, 1, 0.86])
    save(fig, 'q1-2026-data-center-electricity-mobile')


# ============================================================
# Chart 6 (mobile): Spending imbalance
# ============================================================
def chart_spending_imbalance_mobile():
    fig, ax = plt.subplots(figsize=MOBILE_SIZE)

    labels = ['Big 5 Tech\nData Center Capex', 'Entire U.S. Utility\nInfrastructure Investment']
    values = [320, 160]
    colors = [FOREST, SAGE]

    x_pos = [0, 1]
    bars = ax.bar(x_pos, values, color=colors, width=0.55, edgecolor='none')

    # Big $ labels
    for i, (v, c) in enumerate(zip(values, colors)):
        ax.text(i, v + 10, f'${v}B', ha='center', va='bottom',
                fontsize=26, fontweight='bold', color=c)

    ax.set_xticks(x_pos)
    ax.set_xticklabels(labels, fontsize=11, color=CHARCOAL)
    ax.set_ylim(0, 400)
    ax.set_yticks([0, 100, 200, 300, 400])
    ax.set_yticklabels(['$0', '$100B', '$200B', '$300B', '$400B'], fontsize=9)
    ax.grid(True, axis='y', alpha=0.3)
    ax.grid(False, axis='x')

    # "2 to 1" callout
    ax.annotate('2 to 1', xy=(0.5, 240), fontsize=26, fontweight='bold',
                color=TERRACOTTA, ha='center', va='center')
    ax.text(0.5, 205, 'tech outspends\nthe grid', fontsize=10, color=WARM_GRAY,
            ha='center', va='center', style='italic')

    ax.set_title('Spending imbalance for AI infrastructure',
                 fontsize=16, fontweight='bold', pad=30, color=CHARCOAL, loc='left')
    fig.text(0.5, 0.88, '49 GW generation shortfall projected by 2028.',
             fontsize=10, color=WARM_GRAY, ha='center', style='italic')

    fig.text(0.5, 0.02, 'Sources: tech-insider.org, multiple utility reports',
             fontsize=8, color=WARM_GRAY, ha='center', style='italic')

    plt.tight_layout(rect=[0, 0.04, 1, 0.86])
    save(fig, 'q1-2026-spending-imbalance-mobile')


if __name__ == '__main__':
    print("Generating mobile chart variants...")
    chart_model_releases_mobile()
    chart_benchmark_performance_mobile()
    chart_build_timeline_mobile()
    chart_tech_layoffs_mobile()
    chart_data_center_electricity_mobile()
    chart_spending_imbalance_mobile()
    print("Done.")
