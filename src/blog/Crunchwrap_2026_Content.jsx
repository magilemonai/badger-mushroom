// STAGING DRAFT — transcribed from LinkedIn/crunchwrap_blog_package_20260809.md
// (Claude raw material, pre Cody voice pass). Section headers are layout
// additions for the TOC rail. Public links point at the GitHub Pages clones.
import BlogImage from '../components/BlogImage'

export default function Crunchwrap_2026_Content() {
  return (
    <>
      <p>
        It&rsquo;s 6:30 p.m. on Saturday night, and 19 crunchwrap orders hit
        our kitchen in the span of 30 minutes.
      </p>
      <p>Two of them arrived 2.9 seconds apart.</p>
      <p>
        The cook (my wife, Molly, working two pans) never
        broke stride because the request line lived on an iPad, propped up on
        the counter.
        The iPad only ever showed her the next ticket, and the iPad only
        ever asked her to press one button per wrap.
      </p>
      <p>I should back up.</p>
      <p>
        Every summer, Molly and I throw the Crunchwrap Supreme party. She
        hand-builds a custom crunchwrap for every guest who wants one, which
        is most everyone (some of them go for seconds). This was the fourth
        annual.
      </p>
      <p>
        For the first three, the ordering system was paper. You ordered off
        a central menu. You scribbled what you wanted on a post-it note, and
        you handed it off to the kitchen. By the end of the night, the front
        door was shingled with orders, doodles, and reviews. The door often
        got its own photograph. Molly loved that door.
      </p>
      <p>
        The paper system also meant Molly cooked all night while we ran
        orders back and forth across a crowded apartment, and often it was
        hard to know whose wrap was up next.
      </p>
      <p>
        This year, the morning of the party, I sat down with Claude, and we
        built an app.
      </p>

      <h2 id="specific-software">The World&rsquo;s Most Specific Piece of Software</h2>
      <p>
        Here&rsquo;s what 45 people ended up walking into on a Saturday
        evening: a QR code sat on our living room TV. When you scanned it,
        you could type your name and build your wrap. The form walked you
        through your choice of tortilla, filling, queso, sour cream, cheese,
        fixings, all of them swappable, all of them with a &ldquo;none&rdquo;
        option, and vegan options throughout (we knew the dietary needs of
        our community).
      </p>
      <figure>
        <BlogImage
          name="crunch-party-counter"
          alt="A kitchen counter staged for the party: cutting board, chopped tomatoes, shredded lettuce, tostada shells, queso, plate stacks, and the kitchen iPad standing ready behind them"
          width={1600}
          height={1200}
        />
        <figcaption>The mise en place. Note the iPad, reporting for kitchen duty.</figcaption>
      </figure>
      <p>
        After you filled out your form, your phone showed your place in
        line. Meanwhile, in the kitchen, Molly&rsquo;s iPad showed her the
        next wrap with every ingredient spelled out in big letters. After it
        was cooked, she would press exactly one big button. Her hands would
        be busy manning two pans, so her main ask was: make it easy to
        advance the queue.
      </p>
      <figure>
        <BlogImage
          name="crunch-party-ipad"
          alt="The kitchen iPad propped between plate stacks showing order number one with its ingredients in big pills and a single green button reading Wrapped. Next!"
          width={1600}
          height={1200}
        />
        <figcaption>
          Molly&rsquo;s entire interface. The next wrap, spelled out big, and
          exactly one button. Only one ticket per view at the time of this
          picture. More on that later.
        </figcaption>
      </figure>
      <p>
        My phone, meanwhile, was set up to make me the runner. When Molly
        triggered a wrap coming off the pan, it alerted me whose wrap was
        ready for delivery. I then tapped a button that said &ldquo;Run
        it&rdquo; as I left the kitchen, and that triggered a countdown in
        the living room, where the main TV would announce, &ldquo;Wrap coming
        out: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1.&rdquo; At 0, I would time it to
        bring the crunchwrap directly to the diner.
      </p>
      <p>We did that 53 more times.</p>
      <p>
        Now, I&rsquo;m not going to say everyone cheered every time the
        countdown came on the TV, but the fact that it happened more than
        once was beyond my wildest dreams.
      </p>
      <figure>
        <BlogImage
          name="crunch-party-crowd"
          alt="The packed living room mid-party, guests talking in clusters with the party board glowing on the TV in the corner, faces blurred"
          width={1600}
          height={1200}
        />
        <figcaption>The living room at full tilt.</figcaption>
      </figure>

      <h2 id="editing-the-party">Editing the App From Inside the Party</h2>
      <p>
        Forty-nine versions of the app shipped on the day of the party. Ten
        of them shipped between the first order at 4:44 PM and the last at
        8:22, most of them requested by party guests or the chef herself.
      </p>
      <p>
        We had built in a take-a-break button for Molly, but the first time
        she tried it, around wrap 30, nothing happened. The button had been
        broken since the very first deploy. The database was handing back
        the number 1, where the code expected the text character 1. A very
        small bug needed to be fixed to alert the whole party that she was
        taking a break, a well-deserved break.
      </p>
      <p>
        Using my phone as a remote control for Claude, the button was fixed
        and redeployed in about two minutes. The TV then showed the proper
        take-a-break status along with a cheer, &ldquo;LET&rsquo;S HEAR IT
        FOR MOLLY,&rdquo; and the room obliged.
      </p>
      <p>
        She also asked midway through the party for two ticket orders on the
        screen at once, so that she could get one going while the other was
        finishing up. When the tomatoes ran low, we added an
        &ldquo;86&rdquo; (restaurant slang for &ldquo;we&rsquo;re
        out&rdquo;), and anything she tapped would appear unavailable on
        every phone in the party within two seconds. An inside joke about
        someone spilling seltzer appeared on the TV as well, and the ticker
        jokes changed as the wrap count climbed, with new material joining
        the rotation at 15, 20, 30, 40, and 50 wraps, because I wanted the
        app to feel responsive and showcase the party&rsquo;s collective
        effort.
      </p>
      <figure>
        <BlogImage
          name="crunch-party-tvqueue"
          alt="The living room TV showing the party board mid-party: a seven-deep order line with names blurred, a wraps-served counter, the scrolling ticker, and the order QR code"
          width={1600}
          height={1304}
        />
        <figcaption>Seven deep at the peak.</figcaption>
      </figure>

      <figure>
        <BlogImage
          name="crunch-party-board-annotated"
          alt="The board annotated with three numbered notes: the running count that reached 54, the live order line synced to every phone within about two seconds, and a working QR code that links back to this post"
          width={1600}
          height={1089}
        />
        <figcaption>The board, annotated.</figcaption>
      </figure>

      <h2 id="the-numbers">The Numbers, Because of Course There Are Numbers</h2>
      <p>
        Immediately after the party ended, I thought: we have the data. So
        what else to do but make a Spotify-Wrapped-style crunchwrap report,
        which went out by email to the entire party list the next morning?
      </p>
      <p>The headlines:</p>
      <ul>
        <li>54 crunchwraps in 3 hours and 38 minutes.</li>
        <li>The median wait was 24 minutes.</li>
        <li>The fastest wrap went from phone to hands in 4.8 minutes.</li>
        <li>
          One heroic soul ordered at 6:54 p.m., the deep end of the rush,
          and waited in line patiently for 51 minutes for a 5-star dinner.
        </li>
        <li>18 reviews came in through the app. All 18 were 5.0.</li>
      </ul>
      <p>Imagine that!</p>
      <figure>
        <BlogImage
          name="crunch-party-wrapped-trio"
          alt="Three slides from the party recap laid like printed cards: Anatomy of the Night with 391 hand-assembled crunchwrap layers, The Wait Wrap by Wrap with every wrap as a dot and a red 51-minute outlier at number 40, and When the Hunger Hit, a bar chart of the 19-order half hour"
          width={1600}
          height={1850}
        />
        <figcaption>
          Three slides from the night&rsquo;s Wrapped report.
        </figcaption>
      </figure>
      <p>
        I&rsquo;ve recreated the entire Wrapped-style scroll ride, with
        every guest anonymized down to their wrap number, for you to see{' '}
        <a
          href="https://magilemonai.github.io/crunchwrap-wrapped/recap/"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <p>
        Because half the party asked some version of &ldquo;Wait, how
        exactly does this work?&rdquo; I also made an interactive explainer
        that walks through a single order on every screen in the house,
        written for people who have never once thought about a database,
        which up until a few days ago included me. You can walk through it{' '}
        <a
          href="https://magilemonai.github.io/crunchwrap-wrapped/how/"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <figure>
        <BlogImage
          name="crunch-party-journey"
          alt="A step-through diagram from the explainer: four screens around a central shared notebook labeled Redis, at the moment the runner taps RUN IT and the TV shows a giant countdown"
          width={1512}
          height={789}
        />
        <figcaption>From the interactive explainer: one order walking through every screen in the house.</figcaption>
      </figure>
      <p>
        There&rsquo;s also a digital front door covered in
        &ldquo;handwritten post-it notes,&rdquo; one per order, faithful to
        the paper original that started it all. That one isn&rsquo;t linked
        here. Some keepsakes are just for the hosts.
      </p>

      <h2 id="the-part">The Fifth Annual</h2>
      <p>
        If you&rsquo;ve been following my journey on this website, you know
        I&rsquo;ve built software before. The difference is I&rsquo;ve never
        written a multi-screen, live-updating, simultaneous crowd-based
        ordering system, and I&rsquo;d certainly never done it the morning
        of the party.
      </p>
      <p>
        I was standing there holding a margarita when a guest asked,
        &ldquo;Can it do this? Can it gray out ingredients when you&rsquo;re
        out of them?&rdquo; Every screen in the apartment was doing that in
        minutes, all night long.
      </p>
      <p>
        Things like this used to take a team of people and a weeks-long
        sprint. On Crunchwrap Day, it was a dream, and a feeling like you
        are flying.
      </p>
      <p>
        The fifth annual crunchwrap party may return to the post-it note.
        There is something classic about it, and I do kind of miss the
        tactile feeling, but at least for this year, the Crunch App reigned
        supreme.
      </p>
    </>
  )
}
