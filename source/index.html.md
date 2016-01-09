---
title: Index of Checkdesk prototypes
description: Collaborative verification projects
layout: default
---

<h2>Checkdesk prototypes active in early 2016. </h2>

- [Meme Buster](/prototype/workspace) (workspace)
- [Bellingcat project page](/prototype/project?view=timeline)
- [Bellingcat report page](/prototype/report)

<h2>Checkdesk 2013 Information Architecture</h2>

- LB — Liveblog
  - LB:C — Liveblog configuration
    - Branding
    - Logo
    - Tagline
    - LB:C:SL — Footer Links
    - LB:C:FCS — fact-checking statement
    - LB:C:T — Terms of use
    - LB:C:A — About 
    - LB:C:AU — Administer Users
  - LB:FCS — Fact-checking statement
  - LB:T — Terms of Use Page
  - LB:A — About Page
- H — Homepage 
  - H:SL — Story List
  - H:NAV — Homepage Navigation
  - H:CUX — Capstone UX
  - H:T — Tour
  - H:CTA — Homepage Call to Action

- S — Story
  - S:E — Story elements
    - Title
    - Description
    - Featured Reports
    - Footer 
  - … Story is extensible
- U — Update
  - U:E — Update elements
    - Title
    - Byline
    - Reports
    - Paragraphs of text
    - Call to action
    - Advertisments
    - … update is extensible
- RD — Report Detail Page
- RE — Report Elements
  - Title
  - Description
  - Caption
  - Creator
  - Via
  - Owner
  - Question
  - Checklist
  - Task
  - …. Report is extensible
- D — Dashboard Page
  - D:CS — Dashboard Create Story 
  - D:R — Dashboard Report (a report is on your desktop)
  - D:RS — Dashboard Report Stream
  - D:RS:F — Filters 
  - D:E — Dashboard Elements
  - D:Actions — Dashboard Actions
  - D:P — Navigation Profile tooltip
  - D:C — Compose 
  - Update 
  - Story 
  - Report
  - D:AN Analytics
  - D:PE Profile Edit 
  - D:IM Report Import
  - D:EX Export
  - D:Profile
- .. Dashboard is extensible
- PRO — Public Profile
- SIG — Sign in & Register
- MSG — Messages
  + MSG:CON Confirmation Message
  + MSG:ERR Error Messages
- BM — Bookmarklet
  + IBM Install Bookmarklet
- N — Notifications
- + NS — Notification Settings
- AB — About 
- LB — Liveblog
- L — Layout
- L:F — Footer Layout
- L:S — Sidebar Layout
- L:H — Header Layout
- L:M — Modal Layout

<h3>2015 Addition Suggestions (partial list):</h3>

    - The checklog is more like a chat
    - The story is a "project"
    - There are bots that help but are not required in the core workflow
    - The profile appears primarily in a popover
    - "Workbench" seems anacronistic — let's consider them _workspaces_.
    - A workspace takes as input a media object from which it can infer metadata like title, description, colors ... This allows us to skip basic configuration steps sometimes.
    - There are buttons that invoke workspaces
        - Workspaces create artifacts 
            - Artifacts (usually images) that can be used to promote a verification campaign or retract specific claims, multimedia or rumors.
            - Workspaces are intended as evidence 
            - against media already in circulation.

<h3>More 2016 Considerations:</h3>

    Work with Eliot's report; make something that we think Eliot would like. Our primary working question is: How the bellingcat team do their work — based on the data we have about what they did?

        We can see that they did many examples of "promotional images" which served to supplement the main research as figures. These are usually: 

            - Custom crops of photos, eg of tanks in the street
            - Side by side comparison of photos with annotations
            - Custom crops of maps with annotations
            - Captions

            Figures with figcaptions seems to be a natural way to think about these types of ouputs from workspaces. The static image output case is enough to support many different types of uses.

            We can also imagine dynamic outputs with custom behaviors like: 

                hover 
                click
                drag
                swipe
                force touch


    In CD2 terms this is the Report Detail page and the Report Detail Edit page (it never made much sense to separate them.)

    Specific enhancements to the existing Report log in CD2016: 

    - Hyperlinks are automatically expanded. 
    - geolocation 

    - membuster experiment proves the need for flexible "watermarking" and "stamping"
    - The memebuster is an interation in the graphics workspace. So, it would be general purposed as the "graphics workspace".
        - Would other workspaces not need to use the graphics workspace? A workbench can be invoked on any media object! We can infer inputs used to populate the required parts of the graphics workspace: 
                    - The background image could be taken from the largest photo
                        - the photo used could be disambiguated with "Choose another background image CTA"
                    - Parent link relationship could populate the credit area
                    - The authors could be listed
    - The unique aspect of the memebuster experiment was the "stickers" which come in "sticker packs."
    - Analytics integration: sparklines for basic traffic

    PROJECT PAGE BATCH OPERATIONS

    - Add many links at once 
        - In the browser extension, if you have many tabs open, you can add them all to a project at once.
        - In a project page you can add multiple links at a time and use the same project tag to all of them.
    - Edit many links at once — you can check the links and edit all their metadata at once in the sidebar. If there are multiple values for a given field, "[Multiple values]" appears

    CHECK LOG BATCH OPERATIONS

    - Select many objects in the log
        create a permalink of that manual selection
        add it to a shareable batch image 
        or multimedia slideshow

    TEAM BATCH OPERATIONS

    - In the team section of a project page or a link page, each team member is a media object — this means that, like the objects in the log, they  can be represented in an embeddable card in the same batch operation style that generates the embeds and cards from the log.