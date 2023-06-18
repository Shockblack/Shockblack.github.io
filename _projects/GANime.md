---
layout: project
title: 'GANime'
caption: For Fun/Coursework
description: >
  Convolutional Generative Adversarial Network which synthesizes fake anime characters.
date: 12 December 2022
image: 
  path: /assets/img/projects/ganime.png
links:
  - title: GitHub Repository
    url: https://github.com/Shockblack/GANime
accent_color: '#4fb1ba'
theme_color: '#193747'
sitemap: false
---
During my internship at UC Berkeley, I wanted to better acquiant myself with the models I was working with.
At the time, I was learning a lot fast and had ideas I wanted to try out, but never had the chance too.
I started this project to take existing more modern (mostly post 2000) and train a model to produce new ones.
After creating my algorithm to scrape the website [My Anime List](https://myanimelist.net) for images, the project was unfortunately benched.

In the Fall semester of my senior year at OSU, I was in the process of taking an ML course and needed to pick a topic for a final project.
With the data already downloaded (although not cleaned), I thought it was a great opportunity to revisit the project.
I cleaned the data by using a previously trained facial detection model to confirm whether an image had a detectable face.
This was not a perfect method, but it cut out a lot of grunt work on my end and cleaned the data enough.
Armed with much more knowledge about deep networks than I had when I first concieved the project, I began constructing the model.

The weapon of choice for the task was originally going to be a Diffusion-GAN, introduced that summer in a paper by (XXX).
Instead I opted for a more "stock" deep convolutional generative adversarial network (DCGAN).
Some of the layers within this standard model were adjusted though.
I wanted to use many of the new tools that had been being published, such as spectral normalization.

Within a month, I had a working model that produced decent results.
Nothing spectacular, but for the complexity and quality of data (which wasn't great) I used it wound up well!
The code for the model is available on [GitHub](https://github.com/Shockblack/GANime) to learn from.
Here is a gif showing the training of a set of images.

<img src="/assets/img/projects/training.gif" width = "50%" height="auto"/>