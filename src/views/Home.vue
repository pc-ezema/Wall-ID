<template>
  <MainHeader />
    <!--section for the hero-banner-->
    <!--section for the hero-banner-->
     <section class="hero-section">
      <div class="container">
        <div class="row hero-banner">
          <div class="col-lg-6 order-lg-2 hero-img">
            <img src="@/assets/images/wall-hero.jpeg" alt="hero-img" />
          </div>
          <div class="col-lg-6 order-lg-1 hero-text">
            <h1>
              <span style="color: #ac28fb">Wall-ID</span> helps individuals,
              groups and organisations easily manage membership and facilitate
              access control.
            </h1>
            <p class="d-none">
              Wall-ID helps individuals, groups and organisations easily manage
              membership and facilitate access control via a simple mobile
              application.
            </p>
            <div class="d-flex mt-5">
              <div class="btn-img me-4">
                <a href="#"
                  ><img src="@/assets/images/play-store.jpg" alt="play-store"
                /></a>
              </div>
              <div class="btn-img">
                <a href="#"
                  ><img src="@/assets/images/app-store.jpg" alt=" app-store"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    <!--section for id management-->
    <!--section for id management-->
    <section class="section pt-1 id-man-sec">
      <div class="container">
        <div class="id-head text-center">
          <h2>Providing Solution for Businesses and Individuals</h2>
        </div>
        <div class="row id-rows">
          <div class="col-lg-6 right g-0 id1-con" data-aos="fade-right"
                data-aos-duration="500"
                data-aos-delay="500">
            <div class="id1">
              <img src="@/assets/images/id1.png" alt="" />
            </div>
            <div class="id1-text">
              <h5>Enjoyed by over 2 thousand business and individuals</h5>
              <p>
                Wall-ID helps individuals, and business to manage and handle
                identity management.
              </p>
            </div>
          </div>
          <div class="col-lg-6 g-0 id11-con">
            <div class="d-flex id2-con left" data-aos="fade-down"
                data-aos-duration="500"
                data-aos-delay="5500">
              <div class="w-50 id2-text">
                <h5>Simply Happy</h5>
                <p>Making card management easier for our customers</p>
              </div>
              <div class="w-50 id2">
                <img src="@/assets/images/id2.png" alt="" />
              </div>
            </div>
            <div class="d-flex id3-con down" data-aos="fade-top"
                data-aos-duration="500"
                data-aos-delay="500">
              <div class="w-50 id3">
                <img src="@/assets/images/id3.png" alt="" />
              </div>
              <div class="w-50 id3-text">
                <h5>Over 120 events managed in app</h5>
                <p>More than a thousand digital ID cards created by users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--section heading for the various services-->
    <section class="section" id="services">
      <div class="container">
        <div class="id-head text-center">
          <h3>
            More Than Just A Digital Version of Your Wallet ;
            <span style="color: #ac28fb">Bridging the identification gap</span>
          </h3>
        </div>
      </div>
      <!--section for large screens services-->
      <!--section for large screens services-->
      <div class="large-view">
        <section class="section py-0">
          <div class="container lap-view-con">
            <div class="row">
              <div class="col-4 indicators align-self-center">
                <div
                  class="dot mem-lg row justify-content-end pt-2"
                  onclick="currentSlide(1)"
                >
                  <div class="col-2">
                    <img src="@/assets/images/serv1.png" alt="" />
                  </div>
                  <div class="col-8 pb-0">
                    <p class="pt-1 mb-2 pb-0" id="member">Membership</p>
                  </div>
                </div>
                <div
                  class="dot sub-lg row justify-content-end"
                  onclick="currentSlide(2)"
                >
                  <div class="col-2">
                    <img src="@/assets/images/serv2.png" alt="" class="pt-2" />
                  </div>
                  <div class="col-8">
                    <p class="pt-3" @click="toggleDropDown">Subscription</p>
                  </div>
                </div>
                <div
                  class="dot cm-lg row justify-content-end pt-1"
                  onclick="currentSlide(3)"
                >
                  <div class="col-2">
                    <img src="@/assets/images/serv3.png" alt="" />
                  </div>
                  <div class="col-8">
                    <p class="pt-2">ID Card Management</p>
                  </div>
                </div>
                <div
                  class="dot em-lg row py-2 justify-content-end pt-2"
                  onclick="currentSlide(4)"
                >
                  <div class="col-2">
                    <img src="@/assets/images/serv4.png" alt="" />
                  </div>
                  <div class="col-8">
                    <p class="my-0 mb-1">Event Management</p>
                  </div>
                </div>
                <div
                  class="dot acv-lg row py-2 justify-content-end pt-2"
                  onclick="currentSlide(5)"
                >
                  <div class="col-2 mt-1">
                    <img src="@/assets/images/serv5.png" alt="" />
                  </div>
                  <div class="col-8">
                    <p class="my-0">Access Control & Verification</p>
                  </div>
                </div>
                <div
                  class="dot lrc-lg row justify-content-end pt-2"
                  onclick="currentSlide(6)"
                >
                  <div class="col-2">
                    <img src="@/assets/images/serv6.png" alt="" />
                  </div>
                  <div class="col-8">
                    <p>Loyalty and Reward Cards</p>
                  </div>
                </div>
                <div
                  class="dot cdc-lg row justify-content-end pt-2"
                  onclick="currentSlide(7)"
                >
                  <div class="col-2">
                    <img src="@/assets/images/serv7.png" alt="" />
                  </div>
                  <div class="col-8">
                    <p>Credit and Debit Cards</p>
                  </div>
                </div>
              </div>
              <div class="col-8 lap-divs">
                <a href="#member">
                  <div class="lap-div mem-div position-relative">
                  <h5 class="font-600">Membership</h5>
                  <p class="pt-4 pb-3">
                    This feature allows individuals to become members of social
                      groups or organisations registered on the platform.
                      Memberships can either have a defined or undefined lifespan,
                      and can be based on subscription too.
                  </p>
                  <button class="btn btn-dark py-1 px">Get Started</button>
                  <div class="position-absolute bottom-25 left-30 w-75">
                    <img src="@/assets/images/mem.png" alt="" width="100%" />
                  </div>
                </div>
                  </a>
                <div class="lap-div sus-div position-relative">
                  <h5 class="font-600" v-if="dropdowndd == true">Subscription</h5>
                  <p class="pt-4 pb-3">
                    Different groups and organisations have varying commercial
                    packages (products/services) which people subscribe to, some
                    even provide free packages. This feature allows users to
                    creative a wide variety of packages and manage them too.
                  </p>
                  <button class="btn btn-dark py-1 px">Get Started</button>
                  <div class="position-absolute bottom-0 w-50 end-0">
                    <img src="/assets/images/sus.png" alt="" width="110%" />
                  </div>
                </div>
                <div class="lap-div cm-div position-relative">
                  <h5 class="font-600">ID Card Management</h5>
                  <p class="pt-4 pb-3">
                    Groups and organizations will be able to create and define
                    varying ID card categories. With this feature, you won’t
                    need to carry ID cards around any longer, and groups or
                    organisations will better manage the identification of their
                    members.
                  </p>
                  <button class="btn btn-dark py-1 px">Get Started</button>
                  <div class="position-absolute top-15 end-0">
                    <img src="@/assets/images/cm.png" alt="" width="100%" />
                  </div>
                </div>
                <div class="lap-div em-div position-relative">
                  <h5 class="font-600">Event Management</h5>
                  <p class="pt-4 pb-3">
                    This feature enables individuals register and or purchase
                    tickets for a wide variety of events. Groups and
                    organisations can better manage these events using this
                    platform. This feature keeps a database of all your events
                    and their variations.
                  </p>
                  <button class="btn btn-dark py-1 px-3">Get Started</button>
                  <div class="position-absolute top-15 end-0 w-75">
                    <img src="@/assets/images/em.png" alt="" width="100%" />
                  </div>
                </div>
                <div class="lap-div acv-div position-relative">
                  <h5 class="font-600">Access Control & Verification</h5>
                  <p class="pt-4 pb-3">
                    Whatever your need, this feature provides just the right
                    tools to manage access control, and with an embedded
                    verification module, everyone on the app can be duly
                    identified. Now, you have records and time stamps for events
                    and regular access.
                  </p>
                  <button class="btn btn-dark py-1 px-3">Get Started</button>
                  <div class="position-absolute end-0 top-15">
                    <img src="@/assets/images/acv.png" alt="" width="100%" />
                  </div>
                </div>
                <div class="lap-div lrc-div position-relative">
                  <button
                    class="btn text-white py-0 px-3 mb-3"
                    style="background-color: #a324f2; border-radius: 10px"
                  >
                    In View
                  </button>
                  <h5 class="font-600">Loyalty and Rewards Card</h5>
                  <p class="pt-4 pb-3">
                    This earns you points (usually monetized) for every time you
                    patronize a certain customer. With this feature, groups and
                    organisations can also effectively manage individuals
                    subscribed to these loyalty cards, and the entire scheme
                    too.
                  </p>
                  <div class="text-end position-absolute bottom-0 end-0">
                    <img src="@/assets/images/card1.png" alt="" width="85%" />
                  </div>
                </div>
                <div class="lap-div cdc-div position-relative">
                  <button
                    class="btn text-white py-0 px-3 mb-3"
                    style="background-color: #a324f2; border-radius: 10px"
                  >
                    In View
                  </button>
                  <h5 class="font-600">Credit and Debit Cards</h5>
                  <p class="pt-4 pb-3">
                    Imagine having all your cards available to you with a few
                    clicks? Yes, that’s now possible. To make it better, you can
                    now spend from any card – directly and indirectly. No need
                    to carry any more cards in your wallet – your cards just
                    went virtual.
                  </p>

                  <div class="text-end position-absolute bottom-0 end-0">
                    <img src="@/assets/images/card2.png" alt="" width="90%" class="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!--section for mobile view services-->
      <!--section for mobile view services-->
      <div class="mobile-view">
        <!--section for digital version-->
        <section class="section pt-0">
          <div class="container">
            <div class="row digital-con pt-3">
              <div class="col-lg-4 order-lg-2">
                <img src="@/assets/images/mem.png" alt="" width="100%" />
              </div>
              <div class="col-lg-8 order-lg-1 member-div">
                <h4>Membership</h4>
                <p class="py-4">
                  This feature allows individuals to become members of social
                  groups or organisations registered on the platform.
                  Memberships can either have a defined or undefined lifespan,
                  and can be based on subscription too.
                </p>
                <a href="#"
                  ><button class="btn btn-dark px-5">Get Started</button></a
                >
              </div>
            </div>
          </div>
        </section>
        <!--section for subscription-->
        <section class="section pt-0">
          <div class="container">
            <div class="row my-3 pt-3">
              <div class="col-lg-6 sub-img">
                <img src="@/assets/images/sus.png" alt="sus" width="100%" />
              </div>
              <div class="col-lg-6 pt-3 sub-text">
                <h4 class="font-600">Subscription</h4>
                <p class="my-4">
                  Different groups and organisations have varying commercial
                  packages (products/services) which people subscribe to, some
                  even provide free packages. This feature allows users to
                  creative a wide variety of packages and manage them too.
                </p>
                <a href="#"
                  ><button
                    class="btn text-white px-4"
                    style="background-color: #ac28fb"
                  >
                    Get Started
                  </button></a
                >
              </div>
            </div>
          </div>
        </section>
        <!--section for cards management-->
        <section class="section pt-0">
          <div class="container">
            <div class="row card-man-con pt-3">
              <div class="col-lg-4 order-lg-2">
                <img src="@/assets/images/cm.png" alt="cm" width="80%" />
              </div>
              <div class="col-lg-8 order-lg-1 member-div">
                <h4>ID Cards Management</h4>
                <p class="py-4">
                  Groups and organizations will be able to create and define
                  varying ID card categories. With this feature, you won’t need
                  to carry ID cards around any longer, and groups or
                  organisations will better manage the identification of their
                  members.
                </p>
                <a href="#"
                  ><button class="btn btn-dark px-5">Get Started</button></a
                >
              </div>
            </div>
          </div>
        </section>
        <!--section for event management-->
        <section class="section pt-0">
          <div class="container">
            <div class="row my-3 pt-3">
              <div class="col-lg-6 event-img">
                <img src="@/assets/images/em.png" alt="em" width="100%" />
              </div>
              <div class="col-lg-6 event-text pt-3">
                <h4 class="font-600">Event Management</h4>
                <p class="my-4">
                  This feature enables individuals register and or purchase
                  tickets for a wide variety of events. Groups and organisations
                  can better manage these events using this platform. This
                  feature keeps a database of all your events and their
                  variations.
                </p>
                <a href="#"
                  ><button
                    class="btn text-white px-4"
                    style="background-color: #ac28fb"
                  >
                    Get Started
                  </button></a
                >
              </div>
            </div>
          </div>
        </section>
        <!--section for access control-->
        <section class="section pt-0">
          <div class="container">
            <div class="row access-con pt-3">
              <div class="col-lg-6 order-lg-2">
                <img src="@/assets/images/acv.png" alt="acn" width="100%" />
              </div>
              <div class="col-lg-6 order-lg-1 member-div">
                <h4>Access Control & Verification</h4>
                <p class="py-4">
                  Whatever your need, this feature provides just the right tools
                  to manage access control, and with an embedded verification
                  module, everyone on the app can be duly identified. Now, you
                  have records and time stamps for events and regular access.
                </p>
                <a href="#"
                  ><button class="btn btn-dark px-5">Get Started</button></a
                >
              </div>
            </div>
          </div>
        </section>
        <!--section for credit-cards -->
        <section class="section pb-0">
          <div class="container">
            <div class="d-lg-flex justify-content-between">
              <div class="card-one border mb-4">
                <a href="#"
                  ><button
                    class="btn text-white py-0 px-3"
                    style="background-color: #ac28fb; font-size: 13px"
                  >
                    In View
                  </button></a
                >
                <h4 class="font-600 my-4">Loyalty and Reward Cards</h4>
                <p>
                  This earns you points (usually monetized) for every time you
                  patronize a certain customer. With this feature, groups and
                  organisations can also effectively manage individuals
                  subscribed to these loyalty cards, and the entire scheme too.
                </p>
                <img src="@/assets/images/card1.png" alt="" />
              </div>
              <div class="card-two border">
                <a href="#"
                  ><button
                    class="btn text-white py-0 px-3"
                    style="background-color: #ac28fb; font-size: 13px"
                  >
                    In View
                  </button></a
                >
                <h4 class="font-600 my-4">Credit and Debit Cards</h4>
                <p>
                  Imagine having all your cards available to you with a few
                  clicks? Yes, that’s now possible. To make it better, you can
                  now spend from any card – directly and indirectly. No need to
                  carry any more cards in your wallet – your cards just went
                  virtual.
                </p>
                <img src="@/assets/images/card2.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
     <!--simplifying managment section-->
     <section class="section position-relative">
      <div class="container pb-5">
        <div class="text-center id-head">
          <h2>
            Simplifying ID Management for
            <span style="color: #ac28fb">Businesses</span> and
            <span style="color: #ac28fb">Individuals</span>
          </h2>
        </div>
        <div class="mt-4 mb-4 font-600"><h5>Get started with wall-id</h5></div>
        <div class="row justify-content-between">
          <div class="col-lg-2 steps text-center step-one">
            <div class="step-img">
              <div class="poly">
                <img src="@/assets/images/polygon.png" alt="" width="100%" />
              </div>
              <div class="gif">
                <img
                  src="@/assets/images/animation_500_l812mfrm.gif"
                  alt=""
                  width="40%"
                />
              </div>
            </div>
            <p>Download the app for andriod or ios</p>
          </div>
          <div class="col-1 arrow align-self-center">
            <img src="@/assets/images/arrow.png" alt="" width="130%" />
          </div>
          <div class="col-lg-2 steps step-two text-center">
            <div class="step-img">
              <div class="poly">
                <img src="@/assets/images/polygon.png" alt="" width="100%" />
              </div>
              <div class="gif">
                <img
                  src="@/assets/images/animation_500_l811bl8l.gif"
                  alt=""
                  width="45%"
                />
              </div>
            </div>
            <p>Choose to sign up as either an individual or business</p>
          </div>
          <div class="col-1 arrow align-self-center">
            <img src="@/assets/images/arrow.png" alt="" width="130%" />
          </div>
          <div class="col-lg-2 steps step-three text-center">
            <div class="step-img">
              <div class="poly">
                <img src="@/assets/images/polygon.png" alt="" width="100%" />
              </div>
              <div class="gif">
                <img
                  src="@/assets/images/animation_500_l811w7go.gif"
                  alt=""
                  width="40%"
                />
              </div>
            </div>
            <p>Verify your business or personal indentity</p>
          </div>
          <div class="col-1 arrow align-self-center">
            <img src="@/assets/images/arrow.png" alt="" width="130%" />
          </div>
          <div class="col-lg-2 steps step-four text-center">
            <div class="step-img">
              <div class="poly">
                <img src="@/assets/images/polygon.png" alt="" width="100%" />
              </div>
              <div class="gif">
                <img
                  src="@/assets/images/animation_500_l810q856.gif"
                  alt=""
                  width="40%"
                />
              </div>
            </div>
            <p>Your account is ready. Enjoy all Wall-ID features</p>
          </div>
        </div>
        <div class="space"></div>
        <div class="d-lg-flex mt-7 justify-content-between">
          <div class="register1 right card-one text-center">
            <h4 class="font-600 my-4 text-center">Register As A Business</h4>
            <p class="text-center">
              Get signed up as a business and enjoy the seamless identification
              of your members and much more.
            </p>
            <a href="#"
              ><button
                class="btn text-white py-2 px-3"
                style="background-color: #ac28fb; font-size: 14px"
              >
                Get Started
              </button></a
            >
            <img src="@/assets/images/register.png" alt="" class="" />
          </div>
          <div class="register2 left card-two border text-center">
            <h4 class="font-600 my-4">Sign Up As An Individual</h4>
            <p>
              Register as an individal to get proper management of IDs, event
              tickets and much more.
            </p>
            <a href="#"
              ><button
                class="btn text-white py-2 px-3"
                style="background-color: #ac28fb; font-size: 14px"
              >
                Get Started
              </button></a
            >
            <div class="d-flex sign-ind-img mt-10">
              <img src="@/assets/images/suaai1.png" class="move" alt=""  />
              <img src="@/assets/images/suaai2.png" alt="" class="cloth"  />
            </div>
          </div>
        </div>
      </div>
      <div class="bg-style"></div>
    </section>
     <!--section for faq-->
     <section class="section" id="faq-sec">
      <div class="container">
        <div class="id-head text-center">
          <h2>Frequently Asked Question (FAQs)</h2>
          <p class="text-center px-3 py-4">
            Here are some of the Frequently asked questions about Wall-ID
          </p>
        </div>
        <div class="row pt-3 justify-content-between">
          <div class="col-lg-7 order-lg-2">
            <div class="accordion accordion-flush" id="accordionFlush">
              <div class="accordion-item py-2">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    What Is Wall-ID for ?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlush"
                >
                  <div class="accordion-body">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Animi a itaque quasi, veniam commodi ipsa labore numquam ad
                    autem officiis veritatis earum vitae. Aliquid maiores soluta
                    dolore autem necessitatibus earum! Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Voluptatum quisquam,
                    sapiente ipsa corporis minima pariatur. Id necessitatibus
                    optio tempora magnam, fuga dolorem veniam! Obcaecati iure
                    fugiat dolorem nostrum nobis cum!
                  </div>
                </div>
              </div>
              <div class="accordion-item py-2">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    How can I create an account ?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlush"
                >
                  <div class="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos, unde velit consectetur asperiores ut suscipit facere
                    natus iusto modi laudantium. Esse quas dolorem aperiam
                    tempora consequatur ut a officia facilis. Lorem ipsum dolor,
                    sit amet consectetur adipisicing elit. Perferendis expedita
                    quidem beatae possimus, dolores animi velit modi tenetur ad
                    nam, autem numquam sed! Aliquam adipisci repudiandae fugiat
                    libero, accusamus dolorum.
                  </div>
                </div>
              </div>
              <div class="accordion-item py-2">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    How can I buy event tickets ?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlush"
                >
                  <div class="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo odio suscipit soluta sed neque temporibus autem qui
                    totam, ad facere possimus non error delectus praesentium
                    nulla nam quos sit? Ipsa? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Molestiae in corporis nihil
                    odit iure unde voluptate vel laborum sit fuga soluta
                    explicabo sequi dolorum, est sint vitae voluptatibus
                    mollitia! Architecto. Lorem ipsum dolor sit, amet
                    consectetur adipisicing elit.
                  </div>
                </div>
              </div>
              <div class="accordion-item py-2">
                <h2 class="accordion-header" id="flush-headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    Can I have an account for business and individual ?
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlush"
                >
                  <div class="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsa rerum dolores ex inventore, dolore, tempore facere ad
                    laudantium rem omnis molestias eaque minus hic enim eligendi
                    sapiente ab minima sunt!
                  </div>
                </div>
              </div>
              <div class="accordion-item py-2">
                <h2 class="accordion-header" id="flush-headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    Can I create a memebership for my business ?
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingFive"
                  data-bs-parent="#accordionFlush"
                >
                  <div class="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero vitae iusto sed ab? Expedita maxime exercitationem
                    consequuntur tenetur amet, voluptatum alias facilis atque
                    itaque adipisci quasi eum, sit suscipit nihil?
                  </div>
                </div>
              </div>
              <div class="accordion-item py-2">
                <h2 class="accordion-header" id="flush-headingSix">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSix"
                    aria-expanded="false"
                    aria-controls="flush-collapseSix"
                  >
                    How secure Is the Wall-ID app ?
                  </button>
                </h2>
                <div
                  id="flush-collapseSix"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingSix"
                  data-bs-parent="#accordionFlush"
                >
                  <div class="accordion-body">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                    voluptas debitis magnam mollitia aperiam quis quam dolore,
                    saepe ad assumenda harum velit itaque, iure vero at ducimus
                    cupiditate, a quia?
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 order-lg-1 pt-5">
            <h5 class="py-4">Need to contact us?</h5>
            <p class="p-2 px-3 need-1">
              <i class="fa-solid fa-phone pe-2"></i>+234 809 660 2599
            </p>
            <p class="p-2 px-3 need-2">
              <i class="fa-regular fa-envelope pe-2"></i>infodesk@wall-ID.com
            </p>
            <p class="p-2 px-3 need-3">
              <i class="fa-solid fa-location-dot pe-2"></i>Suite 335A Mulliner
              Towers, Alfred Rewane, Ikoyi, Lagos
            </p>
          </div>
        </div>
      </div>
    </section>
    <!--app download section-->
    <section class="section app-section position-relative overflow-hidden">
      <div class="container">
        <div class="row align-items-center py-4">
          <div class="col-lg-6 order-lg-2 d-lg-flex">
            <div class="download-img-mob right">
              <img src="@/assets/images/avail-mob.png" alt="" />
            </div>
            <div class="download-img-lap down position-absolute">
              <img src="@/assets/images/avail-lap.png" alt="" />
            </div>
          </div>
          <div class="col-lg-6 order-lg-1 px-4">
            <h2 class="my-3 w-75 font-600">Available On Web and Mobile</h2>
            <p class="my-3">
              Sign Up to use Wall-ID on web or use the links below to download
              the Wall-ID application
            </p>
            <div class="d-flex mt-5">
              <div class="btn-img me-4">
                <a href="#"
                  ><img src="@/assets/images/play-store.jpg" alt="play-store"
                /></a>
              </div>
              <div class="btn-img">
                <a href="#"
                  ><img src="@/assets/images/app-store.jpg" alt=" app-store"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--footer section-->
      <footer class="footer-section" id="contact">
        <div class="container text-center">
          <div class="row">
            <div class="col-lg-2">
              <img src="@/assets/images/logo1.png" alt="" width="150" />
            </div>
            <div class="col-lg-6 pt-2">
              <ul class="d-lg-flex foot-nav list-unstyled">
                <li class="px-3">
                  <router-link to="/"  class="text-decoration-none">Home</router-link>
                  
                </li>
                <li class="px-3">
                  <router-link to="/"  class="text-decoration-none">Features</router-link>
                </li>
                <li class="px-3">
                  <router-link class="text-decoration-none" to="/">FAQs</router-link>
                </li>
                <li class="px-3">
                  <router-link to="/"  class="text-decoration-none">Contact Us</router-link>
                </li>
              </ul>
            </div>
            <div class="col-lg-4">
              <ul
                class="d-flex justify-content-lg-end list-unstyled justify-content-center"
              >
                <li class="social">
                  <a href="#">
                    <img src="@/assets/images/iglogon.png" alt="" width="30"
                  /></a>
                </li>
                <li class="social">
                  <a href="#"
                    ><img src="@/assets/images/twtlogo.png" alt="" width="30"
                  /></a>
                </li>
                <li class="social">
                  <a href="#"
                    ><img src="@/assets/images/linklogo.png" alt="" width="30"
                  /></a>
                </li>
              </ul>
            </div>
          </div>
          <hr  class="leftt">
          <div class="row pt-2">
            <div class="col-lg-6 order-lg-2 d-lg-flex justify-content-end">
              <p class="px-2">
                <router-link class="text-decoration-none" to="/">Terms & Conditions</router-link>
              </p>
              <p class="px-2">
                <router-link class="text-decoration-none" to="/">Privacy Policy</router-link>
              </p>
            </div>
            <div class="col-lg-6 order-lg-1">
              <p style="color:#000">Copyright © 2022 Wall-ID. All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    <!--section for id management-->
</template>

<script>
import MainHeader from "./MainHeader.vue";
import MainFooter from "./MainFooter.vue";
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  components: { MainHeader, MainFooter },
};
</script>
