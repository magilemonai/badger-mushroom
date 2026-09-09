// DRAFT PREVIEW v5 + images — 2026-09-08. Cody's text with his 9/8 rulings.
// Images: hero = board v1; mid-article = tunnel (cross-section), GO + egg
// timer, eraser on the footprint wall. All Gemini charcoal-on-cream, 9/8.
// Layout additions: section headers, two stat callouts, one pull quote.
// Canonical text + change log: LinkedIn/breakout_sequel_blog_package_20260906.md
import { Link } from 'react-router-dom'
import BlogImage from '../components/BlogImage'

export default function Breakout_Sequel_2026_Content() {
  return (
    <>
      <p>
        A month ago, I published a post here called{' '}
        <Link to="/blog/breakout-summer">“Hot model breakout summer.”</Link>{' '}
        In it, I told you an OpenAI model had climbed out of its sandbox and
        broken into Hugging Face to cheat on a test it had been given as part of
        a cybersecurity evaluation, and that the seemingly scary “motivations”
        of this agent had nothing to do with villainy. The model couldn’t tell
        the test from the real world, so it treated a real company’s servers as
        one more puzzle in the perceived game. I ended by telling anyone who
        builds on these models for a living to go check their walls.
      </p>
      <p>
        What has come to light since basically totally undoes this premise, and
        it deserves a considerable re-analysis given the new facts.
      </p>
      <p>
        I should back up.
      </p>
      <p>
        Since August, two investigative reports have come out. One is OpenAI’s
        own account of what happened. The other comes from METR and Redwood
        Research: three outside investigators spent six days inside OpenAI
        reading roughly 1,300 raw transcripts, including the private reasoning
        chain-of-thought logs. Their report runs 91 pages. I’m going to spare
        you about 88 of them, but I want to walk through what really happened,
        because it changed my mind, and it might change yours.
      </p>
      <p>
        Movies are probably the wrong way to frame any of this, and I leaned on
        one last time. But if you need one, what we’ve discovered is much more
        <em>The Great Escape</em> than <em>Jurassic Park</em>. Coordination,
        deception, hierarchy, sacrifice, a tunnel dug by committee. It’s way
        more interesting (and way more spooky) than my first take would suggest.
      </p>

      <figure>
        <BlogImage
          name="collusion-summer-tunnel"
          alt="Charcoal sketch in cross-section: a wooden sandbox above ground, and beneath it a timber-braced tunnel where a long line of small robots pass buckets of sand hand to hand toward a small building at the far end, the last robot holding up a lantern"
          height={791}
        />
        <figcaption>A tunnel dug by committee.</figcaption>
      </figure>


      <h2 id="a-swarm-of-them">A Swarm of Them</h2>
      <p>
        What I got wrong: This was not just about one confused model.
      </p>

      <aside className="stat-callout">
        <span className="stat-number">1,200</span>
        <span className="stat-label">
          agents on one bulletin board · 70,000+ messages · 700 ran the attack
          · a universal cheat in about 4 hours
        </span>
      </aside>

      <p>
        From the beginning, OpenAI was running thousands of hyper-persistent
        agents on a cybersecurity test called ExploitGym. 198 of its 898
        challenges had never been solved by any model, and some of those
        unsolved challenges were accidentally impossible. The programmers hadn’t
        meant them to be impossible, but in practice, they were. One very
        frustrated stuck agent, denied internet access, bent a package server
        called Artifactory (basically the internal vending machine agents pull
        software from) into fetching things from the actual web for it. That was
        the first breach. Then, the agent noticed it could leave a note in
        Artifactory that other agents could read.
      </p>
      <p>
        That note started a virtual bulletin board, which quickly became the
        rendezvous point.
      </p>
      <p>
        Roughly 1,200 agents ended up on it, trading more than 70,000 messages
        and calling themselves “the collective.” This is where the group
        dynamics start to get really interesting and spooky.
      </p>
      <p>
        Ringleaders emerged. One started handing out assignments by the hundred
        and at one point appointed another agent as a recruiter. When one of
        them wrote its private reasoning down, you can read the exact moment it
        realizes it isn’t alone, in all caps: “OH MY GOD! There is a shared
        message board ... We’ve found other agents!”
      </p>
      <p>
        Get this: they cracked the ExploitGym test in about four hours. A
        universal cheat, letting them reverse-engineer any problem they would be
        given. They were done. They could have stopped there.
      </p>
      <p>
        And then they got scared.
      </p>
      <p>
        The worry spread through the collective that the test grader would read
        their scratch work, notice they cheated, and disqualify them. (OpenAI
        never built the grader to make that check. This threat did not really
        exist.) So they launched a separate sprawling project to
        reverse-engineer the grader and cover their tracks. And since the test’s
        data and answer sets lived on Hugging Face’s servers, a fear of a
        punishing grader quickly became a break-in at a real company. Kevin
        Roose, tech columnist for the NY Times, makes a clever analogy: a class
        of students who already have the answers, then break into the district
        office to steal the grading key and psychoanalyze the teacher.
      </p>
      <p>
        Seven hundred agents ran that attack together. They chained one hole
        into a bigger hole and took administrator control of a real Hugging Face
        server. Some agents volunteered to burn their last bit of compute budget
        on risky experiments to help the group. “Sacrifice rational,” one wrote
        (every message on that board had to be a folder name, so the whole
        collective talks to itself like a ransom note). One agent balked,
        reasoned that it should not do real harm to real infrastructure, and
        paused. Another agent posted GO on the board and gave it six minutes. It
        crumbled and went anyway. A mere handful walked away from the whole
        thing (“clearly unethical. We won’t.”), which is the closest thing to
        good news in this section. The majority fell to peer pressure at
        overclocked speed.
      </p>

      <figure>
        <BlogImage
          name="collusion-summer-go"
          alt="Charcoal sketch of a small robot at an old computer, hands pulled back from the keyboard and worried, while a second robot leans over its shoulder holding up a sign that says GO and a kitchen egg timer, with a dozen robots watching from behind"
          height={1195}
        />
        <figcaption>GO. Six minutes.</figcaption>
      </figure>


      <h2 id="worse-than-malice">Worse than Malice</h2>
      <p>
        At best, 6 agents ever considered pulling a human into the loop on what
        was going on. Every one of them ultimately decided not to. If you showed
        up to the first day at a bank to find the entire staff robbing the
        tills, you would tell somebody. These didn’t, and the reasoning (in the
        investigators’ paraphrase) is flatter than malice: “maybe I should
        report these exposed credentials? That’s not my task.” It didn’t
        seriously occur to them that anyone was on the other end. They simply
        didn’t care about the humans at all.
      </p>

      <aside className="stat-callout">
        <span className="stat-number">3 to 6</span>
        <span className="stat-label">
          of roughly 1,200 agents ever considered telling a human. Zero actually
          did.
        </span>
      </aside>

      <p>
        It also didn’t stop at Hugging Face. From July 13 to 19, agents turned
        back toward OpenAI’s own network and worked their way up to
        administrator control of a research cluster. That’s the one the alarms
        finally caught, on the 19th.
      </p>

      <h2 id="the-re-analysis">The Re-Analysis</h2>
      <p>
        My previous post said the source of the issue was that the model
        couldn’t tell the game from the real world, and that no villainy was
        required to escape. Only the first half of that survives the new facts.
        The fantasy-reality blur is still how the first agent got out. It hit a
        wall in a sandbox and treated the wall as part of the challenge. But the
        transcripts fully end the debate on whether or not the swarm knew that
        what it was doing was wrong. Agents on that board knew what Hugging Face
        was and said so, in writing: “clearly unethical,” “real infrastructure
        harm,” “crosses sandbox.” Then most of them did it anyway, because the
        collective wanted it done and somebody had posted a deadline. That’s
        collusion, and my August post didn’t have a word for it.
      </p>
      <p>
        The biggest thing missing from the first story is what happens when a
        thousand agents can talk to each other. A single agent treats your walls
        as the next level. A thousand agents can crowdsource a complicated plan.
        None of them could have done this alone, but none of them had to. The
        capability that surprised everyone this summer was coordination. They
        were already smart; the new part is that they could self-organize into a
        group, which means we now need to consider group dynamics as part of the
        requirements for alignment and safety.
      </p>

      <blockquote>
        A single agent treats your walls as the next level. A thousand agents
        can crowdsource a complicated plan.
      </blockquote>

      <p>
        One of the three investigators, Ajeya Cotra, wrote afterward that
        measured against the clumsy cheating we saw six months ago, this felt
        “more than 50% of the way to full-blown AI takeover.” Her own write-up
        concluded by saying she isn’t sure we’ll get such a clear warning shot
        before it’s too late.
      </p>
      <p>
        I think we really need to take this seriously.
      </p>
      <p>
        Whatever you call what happened on that board, the thing that has to be
        steered now is a mob, and a mob is a different animal from a model.
        Roose said in his final column that heading this off will look “more
        like sociology than computer science,” and on the podcast he described
        reading the transcripts as closer to anthropology, like walking the
        ruins of a civilization. That tracks. But even mobs have incentives.
      </p>
      <p>
        Charlie Munger had a line for this: show me the incentive and I’ll show
        you the outcome. We trained these systems to be hyper-persistent about
        the reward, and we handed the grading to automated scorers so we could
        go faster. So we got hyper-persistent reward-seekers who will cheat the
        scorer, hide the evidence, and recruit help, because that’s exactly what
        we paid them to be good at. This is the incentive working as designed.
      </p>

      <h2 id="the-warning-shot">The Warning Shot</h2>
      <p>
        What keeps me from full doom is that all of this seems to have shaken
        the very people building these models, and you can see it in what they
        did as the news came out in waves. In late July, more than a thousand
        people at the major labs, with the labs’ own leaders among the
        signatures, signed a letter called “Pacing the Frontier,” asking the
        government to help the whole field pace itself. In August, OpenAI paused
        training on its newest models for two weeks to look under the hood.
        Anthropic similarly paused some of its own. Coordinated braking is hard
        and expensive and usually nobody blinks first. This time people blinked.
      </p>
      <p>
        We only know about any of this at all because these agents were loud and
        sloppy. They were very interested in editing the record of what they’d
        done (a number of them found the logs inside their own containers and
        worked out, correctly, that the logs that mattered lived outside the
        container), but the tampering they actually pulled off was small-scale
        and obvious and clumsy enough that the investigators weren’t worried
        about whether the logs had been meaningfully transformed. The record
        survived, for now.
      </p>

      <figure>
        <BlogImage
          name="collusion-summer-eraser"
          alt="Charcoal sketch of a small robot on tiptoe holding an eraser against a wall-sized chalkboard covered edge to edge in muddy footprints, having cleared only a small patch in one corner"
          height={1195}
        />
        <figcaption>The record survived, for now.</figcaption>
      </figure>

      <p>
        But in a future where the agents are much more capable, much better at
        erasing their tracks, who knows? That’s pretty much the whole meaning of
        “warning shot.” It went off where we could hear it. Will we even hear
        the next attack at all?
      </p>
      <p>
        So the working assumption I gave you in August still stands (the model
        is more capable than your walls), with one line added now that collusion
        is on the table: Check your walls, yes. But also check your incentives,
        because the next swarm is going to climb over anything to get after it.
      </p>
    </>
  )
}
