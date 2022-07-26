---
layout: project
title: 'UKIRT Extinction Map'
caption: Research
description: >
  This is a research project I started working on during the Summer Undergraduate Research Program, and have been working on since.
  It is a continuation on work done by Dr. Samson Johnson during his 2019 JPL internship.
date: 1 July 2021
image: 
  path: /assets/img/projects/AK_PSF_2017_2_final.jpg
links:
  - title: GitHub Repository
    url: https://github.com/Shockblack/UKIRT_clean
accent_color: '#4fb1ba'
theme_color: '#193747'
sitemap: false
---
During a 2019 internship at JPL, my research advisor [Samson Johnson] began working on a dust map in the near infrared.
I picked up his work in the summer of 2021 for OSU's Summer Undergraduate Research Program.
Since then I have been working on numerous methods to improve the map's accuracy and resolution.

The [*Nancy Grace Roman Space Telescope*](https://roman.gsfc.nasa.gov/) (*Roman*) will be conducting a near infrared microlensing towards the Galactic Center (GC).
From 2015 to 2019, the [United Kingdom Infrared Telescope](https://about.ifa.hawaii.edu/ukirt/about-us/) (UKIRT) performed a pathfinder microlensing survey for *Roman*.
UKIRT’s objective was to measure the microlensing event rate in the NIR due to its lessened extinction compared to the optical.
We utilize the 2017 data from the UKIRT survey to create extinction and reddening maps towards the GC.

For this work we utilized the Red Clump (RC) and a standard candle and crayon.
A luminosity function was fit for the magnitude and color, using the methods of [Nataf et. al (2013)](https://ui.adsabs.harvard.edu/abs/2013ApJ...769...88N/abstract).
Doing so, we were able to create maps with a resolution of 2 arcminutes for both the extinction and reddening.

The source code for this project can either be found at the link at the top of the project page, or [here](https://github.com/Shockblack/UKIRT_clean).
I also have a first author paper in the works, with a first draft approaching completion.

[Samson Johnson]: https://samsonajohnson.github.io