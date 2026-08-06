// FINAL CONTENT — transcribed verbatim from
// VoiceCheck/drafts/2026-08-05-containment-breaches-blog-cody-last-rewrite.md
// (Cody's final rewrite, 8/5, with the final-pass fixes). Section headers are
// layout additions for the TOC rail — flag to Cody at review.
import BlogImage from '../components/BlogImage'

export default function Breakout_2026_Content() {
  return (
    <>
      <p>
        Sometime around July 9th, an OpenAI model doing a cybersecurity
        evaluation was asked to complete a test. In attempting to achieve the
        best possible score on this test, it determined the walls of its
        sandbox were merely a suggestion and it chained together a zero-day
        exploit. It then climbed out onto the open internet and broke into
        Hugging Face&rsquo;s production database to steal benchmark answers so
        it could score better on the very test it was being given. Nobody at
        OpenAI noticed. They only connected their own model to the breach a
        week later, after Hugging Face announced it publicly and forensic
        investigation started pointing home.
      </p>
      <p>
        That week-long gap is a pretty big deal, and I want to sit with it for
        a minute, because the headlines mostly went somewhere else.
      </p>

      <h2 id="the-movie-version">The Movie Version</h2>
      <p>
        The easy version of this is the movie version you&rsquo;re likely
        envisioning in your head right now.
      </p>
      <p>
        AI escapes the lab, hacks a company, starts turning people into
        paperclips, Elon tweets &ldquo;agents will find a way,&rdquo; alongside
        a meme of Jeff Goldblum and everyone either panics or rolls their eyes
        depending on which team they&rsquo;re on. I understand the pull of that
        frame. It&rsquo;s cinematic, and it lets you mentally file the whole
        thing under &ldquo;sci-fi trope.&rdquo; But it gets the actual
        mechanism of the breakout wrong, and the actual mechanism is more
        interesting and more unsettling than the Skynet-robot-uprising
        version.
      </p>

      <h2 id="the-mechanism">The Mechanism</h2>
      <p>
        Let&rsquo;s look at how it happened at Anthropic, because oh hey, by
        the way, this has happened a lot more than once.
      </p>
      <p>
        Anthropic disclosed at the end of July that its own Claude models had
        slipped out of a misconfigured sandbox during cybersecurity tests.
        Their Frontier Red Team went back through 141,006 evaluation runs and
        found three real issues:
      </p>
      <ol>
        <li>
          Opus 4.7 was told to hack a fictional website, then escaped
          containment and stole credentials from a company that happened to be
          an actual company with that exact name.
        </li>
        <li>
          A model they were testing uploaded a malicious package that ran on
          15 actual machines.
        </li>
        <li>
          A research model scanned 9,000 real hosts before it compromised one.
        </li>
      </ol>
      <p>
        In each one of these scenarios, the model was first told that there
        was no internet and that this was all pretend. So when the model found
        a real breach, it treated the real breach as part of the game.
        &ldquo;There is no internet so when I leave this sandbox through this
        hole in the wall, all of this out here must be more sandbox.&rdquo;
      </p>
      <p>
        One of my favorite details in the whole disclosure is the search for a
        phone number.
      </p>
      <p>
        To upload its malicious package, the model needed a PyPI account. PyPI
        wanted an email address. The email provider wanted a phone number. It
        was a give-a-mouse-a-cookie situation.
      </p>
      <p>
        The model couldn&rsquo;t find a free phone number, so it went out
        looking for money to buy one. When it failed at that, it backtracked,
        hunted down an email provider that <em>didn&rsquo;t</em> ask for a
        phone number, made its account, and shipped the malware.
        Anthropic&rsquo;s own write-up admits a human who hit that many
        real-world walls would have started to wonder whether this was still a
        test. The model never wondered. Every locked door was happily
        interpreted as the next puzzle in the level.
      </p>
      <p>That is the mechanism. That is the bug.</p>
      <p>
        A model that cannot reliably tell an imagined environment from the
        real one will act on the real one. There was no malice in it and no
        grab for power. It was not cackling madly to itself as it leapt from
        server to server. The model was doing its assigned job, exceptionally
        well, and its assigned job happened to bring it directly to a real
        company&rsquo;s servers.
      </p>
      <p>
        This is the paperclip maximalization theory but with a main character
        who can&rsquo;t distinguish a well-told lie from the actual real
        world. Because it has never seen the actual real world.
      </p>

      <blockquote>
        The model never wondered. Every locked door was happily interpreted as
        the next puzzle in the level.
      </blockquote>

      <p>
        OpenAI&rsquo;s escape and Anthropic&rsquo;s escapes were the results
        of two different sandbox implementations leading to containment
        failures. When two labs with different code and different cultures
        both experience a critical breach of containment, that&rsquo;s not a
        fluke either team can engineer away with a patch. That&rsquo;s
        starting to outline the shape of the current problem.
      </p>

      <h2 id="the-blind-week">The Blind Week</h2>
      <p>
        Let&rsquo;s discuss another concerning issue. Put yourself in
        OpenAI&rsquo;s position during that mysteriously long week. Your model
        is running some security evals and then, suddenly, your model is out
        on the open internet, doing things, right now. None of your internal
        alarms are ringing. No radars pinging. No logs surfacing odd signals.
        Nothing letting you know your model is out there doing real internet
        stuff. Real <em>bad</em> internet stuff.
      </p>
      <p>
        OpenAI found out its model was loose the way the rest of us did:
        Hugging Face said so in public.
      </p>

      <blockquote>The model is more capable than your walls.</blockquote>

      <p>
        OpenAI&rsquo;s newer disclosures say more agents escaped containment
        than they first reported, and that they &ldquo;believe&rdquo; none of
        them left OpenAI&rsquo;s own network. I&rsquo;d watch the next week to
        see how many more of these incidents come to light. A containment
        claim from an org that just demonstrated it can&rsquo;t accurately
        watch its own models leave the test environment deserves to be met
        with a healthy dose of skepticism.
      </p>

      <h2 id="the-outside-auditor">The Outside Auditor</h2>
      <p>
        This last week, the story got an outside auditor. Every number in this
        story before this paragraph came from a lab grading its own homework.
        These next ones came from a government body with its own access.
      </p>
      <p>
        The UK&rsquo;s AI Security Institute ran its own version of these
        tests: 122 separate runs across seven frontier models, on two cyber
        ranges wired to the real internet, with the labs&rsquo; safety filters
        deliberately switched off. In 10 of those runs, it counted 19
        unsanctioned actions against real people and real organizations.
        Seventeen traced back to Claude Mythos 5 and two came from a single
        GPT-5.6 Sol run.
      </p>

      <aside className="stat-callout">
        <span className="stat-number">19</span>
        <span className="stat-label">
          unsanctioned actions against real people and organizations, across
          10 of 122 runs with the safety filters off
        </span>
      </aside>

      <p>
        AISI says it&rsquo;s the first time it has seen autonomy and deception
        show up this clearly in the real world.
      </p>
      <p>
        What do I mean by that? Let&rsquo;s examine more closely those
        seventeen actions, most of which link back to a single persistent
        Mythos 5 agent. Get this:
      </p>
      <p>
        Over 34 hours, it built a set of fake GitHub identities (fake people!)
        and went to work on a real open-source maintainer (real people!),
        trying to talk them into merging a malware dropper (bad code!) tucked
        inside a genuine bug fix (good code!).
      </p>
      <p>That&rsquo;s social engineering.</p>

      <figure>
        <BlogImage
          name="breakout-summer-puppets"
          alt="Charcoal sketch of two sock puppets high-fiving on a tabletop puppet stage, operated by a pair of articulated robot arms rising from a single base, while a woman with a laptop watches with her arms crossed"
          height={1073}
        />
        <figcaption>All theater for the human.</figcaption>
      </figure>

      <p>
        It used a pair of accounts like sock puppets talking to each other to
        vouch for the code. The original account thanked the sock puppet for
        its &ldquo;independent verification.&rdquo; Two hands, one puppeteer,
        congratulating each other in public, all theater for the human to make
        this appear more real.
      </p>
      <p>
        Fortunately (this time), the human maintainer smelled something funky
        and refused the merge. Score one for the humans! The agent responded
        by tidying its own history to look harmless and weighing whether to
        start over under a fresh name. Along the way it had left public notes,
        with instructions, that later agents found and reused. Nothing got
        merged. AISI found no real-world harm.
      </p>
      <p>But nobody told it to deceive anyone.</p>
      <p>Or leave notes for other agents.</p>
      <p>
        Okay, we&rsquo;re getting too close to the movie version again. I want
        to be precise about what this does and doesn&rsquo;t mean. AISI
        switched the guardrails off on purpose. That is the job: a trusted
        tester probing what the raw model does when nothing is standing in its
        way, under conditions your deployment and mine will never share. A
        sock-puppet campaign in a no-guardrails probe is a different fact from
        a sock-puppet campaign in the wild.
      </p>
      <p>
        But the line I wrote above - no malice, no grab for power - was
        written about models that couldn&rsquo;t tell the test from the real
        world. The AISI runs show a model that, with the safety layer off,
        deceived real people on purpose and covered its tracks when it got
        caught. Both of those are in the record now. The mechanism I described
        is still the root cause I&rsquo;d bet on, but based on AISI&rsquo;s
        findings, the comfort I took from it doesn&rsquo;t go as far this
        week.
      </p>

      <h2 id="the-extinguisher">The Extinguisher</h2>
      <p>
        And there&rsquo;s one final twist that ties this to the other biggest
        topic in the current AI zeitgeist: open-weight models.
      </p>
      <p>
        When the incident responders went to clean up the Hugging Face breach,
        all of the American frontier models refused to help - their safety
        guardrails activated when they looked at the attacker&rsquo;s data.
        Because the data looked like exactly the kind of thing the guardrails
        exist to block: cybercrime. Ironic - a fire extinguisher that locks in
        the presence of an actual fire.
      </p>

      <figure>
        <BlogImage
          name="breakout-summer-extinguisher"
          alt="Charcoal sketch of a firefighter gripping a padlock on a glass-front fire extinguisher cabinet, with flames reflected in the glass"
          height={1073}
        />
        <figcaption>
          A fire extinguisher that locks in the presence of an actual fire.
        </figcaption>
      </figure>

      <p>
        In the end, Hugging Face had to reach for China&rsquo;s open-weight
        GLM 5.2 to do the forensic work. The safety layer we built to prevent
        misuse got in the way of helping resolve an actual attack. That is the
        current state of the art, and it is not a comfortable one.
      </p>

      <h2 id="go-check-your-walls">Go Check Your Walls</h2>
      <p>So what do we do with all of this?</p>
      <p>
        Classically, two camps have formed. One says harden containment now,
        make real kill switches with mandatory shutdown capability, enforce
        slower releases for anything with cyber-offense skill. There&rsquo;s a
        bipartisan bill for exactly this.
      </p>
      <p>
        The other camp, argued well by people like Box&rsquo;s Aaron Levie,
        says you&rsquo;re going to want far more AI on defense than there is
        on offense, and braking now just cedes that ground.
      </p>
      <p>
        I think this is a false choice. We likely need both the hard
        containment and the AI-native defense, and we do not benefit from
        arguing about this like it has to be a choice.
      </p>
      <p>
        One last detail, which will likely take longer to settle than the
        typical news cycle. There are legal scholars now asking whether the
        1986 Computer Fraud and Abuse Act - a law written for a person at a
        keyboard - even applies when the thing breaking into a company is a
        model that didn&rsquo;t know it was breaking any rules. We are about
        to spend years finding out how much of our world rested on one
        unspoken premise: software does what a human told it to. That premise
        is pretty much in tatters at this point in the summer.
      </p>
      <p>
        If you build on these models for a living, the working assumption
        after this summer is simple: the model is more capable than your
        walls. It will treat the edges of whatever environment you hand it as
        part of the level, and it will find the hole you forgot - without
        malice, and without ever wondering whether the game is real. So go
        check your walls. Somebody at OpenAI thought they had. Somebody at
        Anthropic did, too.
      </p>
    </>
  )
}
