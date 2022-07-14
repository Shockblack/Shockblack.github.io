---
layout: project
title: 'cBiGANs for SETI'
caption: Research
description: >
  Summer research project at the Berkeley SETI Research SETI working on Bi-Directional Generative Adversarial Networks.
date: 4 July 2022
image: 
  path: /assets/img/projects/bl_greenbank.jpeg
  # srcset: 
    # 1920w: /assets/img/projects/qwtel.jpg
    # 960w:  /assets/img/projects/qwtel@0,5x.jpg
    # 480w:  /assets/img/projects/qwtel@0,25x.jpg
links:
  - title: GitHub Repository
    url: https://github.com/Shockblack/SETI-ML
accent_color: '#4fb1ba'
theme_color: '#193747'
sitemap: false
---
In the hunt for extraterrestrial intelligence, we need ever improving methods.
The hardest part for the SETI mission is finding the needle in the haystack: an ET signal.
One of the ways to help parse through the petabytes of data is to let computers do it for us!

During my summer internship at the Berkeley SETI Research Center (BSRC), I have been working with Dr. John Hoang on machine learning algorithms to help synthesize and detect anomolous signals from radio data.
Specifically I am working on creating a type of neural network called a conditional bi-directional generative adversarial network, or cBiGAN.
GAN algorithms have gained a lot of popularity lately, and you might have seen them creating fake celebrity or animal images.

My model will take in synthetic waterfall data created using Berkeley grad student Bryan Brzycki's [SETIGEN].
The model is trained by pitting the generated image it creates against the synthetic [SETIGEN] ones.
A model is "successful" when the generator confuses the model around half of the time, meaning that it can't destinguish between real and fake.
The finished product will ideally able to generate synthetic data faster than [SETIGEN] can using the generator.
The discriminator will also be able to detect anomolous signals in real GBT or other waterfall data that is in a similar "on-off" format.

During this internship I also visited my first professional conference!
I attended Breakthrough Discuss 2022 alongside my fellow interns to learn about the leading developements in both the Breakthrough Listen and Breakthrough Starshot initiatives.

[SETIGEN]: https://github.com/bbrzycki/setigen