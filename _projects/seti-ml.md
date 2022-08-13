---
layout: project
title: 'cBiGANs for SETI'
caption: Research
description: >
  Summer research project at the Berkeley SETI Research Center working on Bi-Directional Generative Adversarial Networks.
date: 4 July 2022
image: 
  path: /assets/img/projects/bl_greenbank.jpeg
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

During my summer internship at the Berkeley SETI Research Center (BSRC), I have been working with [Dr. John Hoang] on machine learning algorithms to help synthesize and detect anomolous signals from radio data.
Specifically, I am working on creating a type of neural network called a conditional bi-directional generative adversarial network, or cBiGAN.
GAN algorithms have gained a lot of popularity lately, and you might have seen them creating fake celebrity or animal images.

<img style="float: right; padding-left: 7px;" src="/assets/img/projects/runtime.png" width = "45%" height="auto"/>
My model will take in synthetic waterfall data created using Berkeley grad student Bryan Brzycki's [SETIGEN].
The model is trained by pitting the generated image it creates against the synthetic [SETIGEN] ones.
A model is "successful" when the generator confuses the discriminator around half of the time, meaning that the discriminator can't destinguish between real data and generated data.
The generator can generate synthetic data faster than [SETIGEN] as well, with runtimes shown in the table above.
The discriminator will also be able to detect anomolous signals in real GBT or other waterfall data that is in the similar "on-off" format.
This means we can parse through mountains of data in an efficient manner using the discriminator.

During this internship I also visited my first professional conference!
I attended Breakthrough Discuss 2022 alongside my fellow interns to learn about the leading developements in both the Breakthrough Listen and Breakthrough Starshot initiatives.
At the conference I also volunteered to aid Breakthrough Discuss by working their front desk for the entire first day.

<!-- Scrolling image gallery for Breakthrough Discuss Photos -->
<body>
<!-- Container for the image gallery -->
<div class="container">

  <!-- Full-width images with number text -->
  <div class="mySlides">
    <div class="numbertext">1 / 5</div>
      <img src="/assets/img/projects/aiden_bl_discuss.jpeg" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">2 / 5</div>
      <img src="/assets/img/projects/aiden_discuss_panel.jpeg" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">3 / 5</div>
      <img src="/assets/img/projects/aiden_conference.jpeg" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">4 / 5</div>
      <img src="/assets/img/aiden_lick.jpeg" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">5 / 5</div>
      <img src="/assets/img/aiden_ata.jpeg" style="width:100%">
  </div>

  <!-- Next and previous buttons -->
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>

<script>
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
</script>
    
</body>

<br>
Photos from my internship at the Berkeley SETI Research Center at University of California, Berkeley.
{:.figcaption}

[SETIGEN]: https://github.com/bbrzycki/setigen
[Dr. John Hoang]: https://astro.berkeley.edu/people/john-hoang/