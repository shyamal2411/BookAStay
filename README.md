# BookAStay

## Introduction

The hospitality industry is crucial for global travel and accommodation, but finding the right hotel amidst numerous options can be overwhelming. BookAStay simplifies this process with a user-friendly web platform, enabling travelers to efficiently search, compare, and book hotels tailored to their needs. Developed to meet the increasing demand for streamlined hotel booking experiences, BookAStay utilizes cutting-edge technologies for a seamless user experience, incorporating unique features inspired by market research and industry leaders.

This project proposal outlines the development process and core functionalities of BookAStay, emphasizing its benefits for both travelers and hoteliers. By the end, readers will understand the platform's purpose and expected outcomes, offering a comprehensive solution to the challenges of hotel booking in the modern age.

- _Date Created_: 25 / 03 / 2024
- _Last Modification Date_: 11 / 04 / 2024
- _Live URL_: <https://final-book-a-stay.netlify.app/>
- _Git URL_: <https://git.cs.dal.ca/sprajapati/csci-5709-grp-07/>

## Authors

- [Shyamal Prajapati](sgp@dal.ca) - B00958501
- [Nikunj Hudka](nk856850@dal.ca) - B00959783
- [Dharmil Shah](dharmilnshah@dal.ca) - B00965853
- [Aman Desai](amandesai@dal.ca) - B00965752
- [Akshat Shah](akshat.shah@dal.ca) - B00971354
- [Divyank Shah](dv491067@dal.ca) - B00966377

## Introduction

The hospitality industry, particularly hotel booking services, plays a vital role in facilitating travel and accommodation for individuals worldwide.

BookAStay aims to address this challenge by providing a user friendly web platform where travellers can efficiently search, compare, and book hotels according to their specific needs.

Below are some objectives of our application:

- Efficient Booking Interface
- Comprehensive Hotel Listings
- User Authentication and Personalization
- Transparent Reviews and Ratings
- Service Provider Verification
- Secure Payment Gateway

## Prerequisite

- Node.js and npm (or Yarn) should be installed globally on the machine. Install [here](https://nodejs.org/en).
- (Optional) Node Version Manager (nvm) if you need to manage multiple versions of Node.js. Installation instructions can be found [here](https://github.com/nvm-sh/nvm).

## Deployment

Our backend services are deployed in render using github repository, and frontend web application is hosted on Netlify from another github repository.

## Installation & Usage steps

#### Steps for backend application

- Open the root project and fire the below commands to install the project dependencies and start the application.

```
cd backend
```

```
npm install
```

```
npm start
```

#### Steps for frontend application

- Open the root project and fire the below commands to install the project dependencies and start the application.

```
cd frontend
```

```
npm install
```

```
npm start
```

## Built With

- [React](https://legacy.reactjs.org/docs/getting-started.html/) - The web framework used
- [npm](https://docs.npmjs.com//) - Dependency Management
- [Tailwind](https://tailwindcss.com/) - CSS Framework
- [FontAwesome](https://fontawesome.com/docs/web/use-with/react/) - Fontawesome for icons
- [react-datepicker](https://www.npmjs.com/package/react-datepicker) - datepicker library
- [Flowbite-datepicker](https://flowbite.com/docs/plugins/datepicker/) - Flowbite library
- [Netlify](https://www.netlify.com/) - For hosting the website
- [Node.js](https://nodejs.org/en) - Javascript Runtime environment
- [Express](https://expressjs.com/) - Node.js web application framework
- [MongoDB](https://www.mongodb.com/atlas/database) - MongoDB Atlas for database hosting
- [render](https://render.com/) - Hosting web services
- [react-datepicker](https://www.npmjs.com/package/react-datepicker) - Date Picker
- [MUI](https://mui.com/material-ui/) - Material UI
- [Dotenv](https://www.npmjs.com/package/dotenv) - Dotenv
- [React-Popup](https://www.npmjs.com/package/reactjs-popup) - Popup
- [Axios](https://www.npmjs.com/package/axios) - Axios
- [Flowbite](https://www.npmjs.com/package/flowbite) - Flowbite

## List of Features:

1. User/Service Provider Authentication (Login and Signup)
2. Service provider authentication by admin.
3. Login/Signup of User & Service Provider
4. Profile Management.
5. Rating and Review
6. Hotel Discovery (Search, filter, and sorting)
7. Booking System
8. Email Notification
9. Payment Gateway
10. Booking History

## Sources Used

We have taken inspiration from some of the market leaders in the current industry, like [Campr](https://campr.no/), [AirBnb](https://www.airbnb.ca/), [MakeMyTrip](https://www.makemytrip.com/), [Booking](https://www.booking.com/index.en-gb.html?label=gen173nr-1FCAEoggI46AdIM1gEaCeIAQGYAQm4AQfIAQzYAQHoAQH4AQuIAgGoAgO4As_p4LAGwAIB0gIkNDc5OTA4ZmEtNTIwMy00NjUyLWEwODktYmI1ZDcwMWZjMjE02AIG4AIB&sid=63886f4d943e3ec2efda49b18348d9e3&aid=304142) for website design and features.

#### Source: frontend/src/components/Home.js

Referenced code: [Windstatic](https://windstatic.com/registration)

```
<form>
                      <input autocomplete="false" name="hidden" style="display: none">
                      <input name="_redirect" type="hidden" value="https://jamstacker.studio/thankyou">
                      <div class="mt-4 space-y-6">
                        <div class="col-span-full">
                          <label class="block mb-3 text-sm font-medium text-gray-600" name="password">
                            Password
                          </label>
                          <input class="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" placeholder="******" autocomplete="off" type="password">
                        </div>
                        <div class="col-span-full">
                          <label class="block mb-3 text-sm font-medium text-gray-600" name="password">
                            Confirm passord
                          </label>
                          <input class="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" placeholder="******" autocomplete="off" type="password">
                        </div>


```

#### Updated Code

```
                            <div className="w-full md:w-auto">
                                <label
                                    htmlFor="location"
                                    className="text-md block text-left font-semibold text-gray-700"
                                >
                                    Location
                                </label>
                                <input
                                    class="mx-4 ml-10 block h-10 w-52 appearance-none rounded-lg border border-gray-200 bg-white px-6 py-3 text-black placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm md:w-40"
                                    placeholder="Location"
                                    type="text"
                                />
                            </div>

```

#### Source: frontend/src/utils/Faq.js

Source referenced: [Tailgrid](https://tailgrids.com/components/accordions)

```

const Accordion = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                Any Questions? Look Here
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
          </div>
        </div>
      </div>

```

Updated Code:

```
            <section className="relative z-0 mt-16 overflow-hidden bg-white pb-12 pt-0 sm:mt-8 lg:pb-[90px] lg:pt-[50px]">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                                <h2 className="text-dark mb-4 text-3xl font-bold sm:text-[40px]/[48px]">
                                    Any Questions? Look Here
                                </h2>
                                <p className="text-body-color text-base">
                                    Lorem ipsum dolor sit amet. Et aliquam quasi nam magni officiis
                                    ut earum necessitatibus est velit blanditiis. Sed corrupti
                                    repellendus nam aliquid libero ut saepe enim.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full flex-wrap px-2">
                        {faqData.map((faq, index) => (
                            <AccordionItem key={index} header={faq.header} text={faq.text} />
                        ))}
                    </div>
                </div>
                </section>
```

#### Source: frontend/src/utils/Contact.js

Source: [Tailgrids](https://tailgrids.com/components/contacts)

```
<div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="relative rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2 sm:p-12">
                <form>
                  <ContactInputBox
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />
                  <ContactInputBox
                    type="text"
                    name="email"
                    placeholder="Your Email"
                  />
                  <ContactInputBox
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                  />
                  <ContactTextArea
                    row="6"
                    placeholder="Your Message"
                    name="details"
                    defaultValue=""
                  />
                  <div>
                    <button
                      type="submit"
                      className="w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                <div>
                  <span className="absolute -right-9 -top-10 z-[-1]">
                    <svg
                      width={100}
                      height={100}
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
```

Updated code:

```
<div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="dark:bg-dark-2 relative rounded-lg border-2 bg-white p-8 shadow-lg sm:p-12">
                                <form>
                                    <InputBox type="text" name="name" placeholder="Your Name" />
                                    <InputBox type="text" name="email" placeholder="Your Email" />
                                    <InputBox type="text" name="phone" placeholder="Your Phone" />
                                    <TextBox
                                        row="4"
                                        placeholder="Your Message"
                                        name="details"
                                        defaultValue=""
                                    />
                                    <div>
                                        <button
                                            type="submit"
                                            className="border-primary w-full rounded border bg-sky-600 p-3 text-white transition hover:bg-opacity-90"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                                <div>
                                    <span className="absolute -right-9 -top-10 z-[-1]">
                                        <svg
                                            width={100}
                                            height={100}
                                            viewBox="0 0 100 100"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                                                fill="#f97316"
                                            />
                                        </svg>
                                    </span>
```

#### Source: frontend/src/components/home/Testimonials.js

Referenced code: [Windstatic](https://windstatic.com/testimonials)

```
<section>
                <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">

                  <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <div class="inline-block p-4 mx-auto text-left align-bottom transition-all transform bg-gray-100 sm:align-middle sm:p-8 rounded-2xl">
                      <div class="flex w-full mb-4">
                        <div class="overflow-hidden ">
                          <img alt="" class="inline-block object-cover rounded-full h-9 w-9" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80">
                        </div>
                        <div class="flex-grow pl-3">
                          <h6 class="text-lg font-medium leading-6 text-black">Sam Samuel</h6>
                          <p class="text-base text-gray-500">@Twitter_Handle</p>
                        </div>

                      </div>
                      <div class="w-full mb-4">
                        <p class="text-base text-gray-500">
                          "When building projects, going from an idea to a working version is
                          crucial. Unwrapped's components have been extremely useful for quickly
                          mocking up a landing page"
                        </p>
                      </div>
                      <div class="w-full text">
                        <a href="#_" class="text-xs text-right text-blue-500 hover:text-black">Founder of Great company</a>
                      </div>
                    </div>
                    <div class="inline-block p-4 mx-auto text-left align-bottom transition-all transform bg-gray-100 sm:align-middle sm:p-8 rounded-2xl">
                      <div class="flex w-full mb-4">
                        <div class="overflow-hidden ">
                          <img alt="" class="inline-block object-cover rounded-full h-9 w-9" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80">
                        </div>
                        <div class="flex-grow pl-3">
                          <h6 class="text-lg font-medium leading-6 text-black"> Tom Thomas</h6>
                          <p class="text-base text-gray-500">@Twitter_Handle</p>
                        </div>

                      </div>
                      <div class="w-full mb-4">
                        <p class="text-base text-gray-500">
                          "When building projects, going from an idea to a working version is
                          crucial. Unwrapped's components have been extremely useful for quickly
                          mocking up a landing page"
                        </p>
                      </div>
                      <div class="w-full text">
                        <a href="#_" class="text-xs text-right text-blue-500 hover:text-black">Founder of Great company</a>
                      </div>
                    </div>
                    <div class="inline-block p-4 mx-auto text-left align-bottom transition-all transform bg-gray-100 sm:align-middle sm:p-8 rounded-2xl">
                      <div class="flex w-full mb-4">
                        <div class="overflow-hidden ">
                          <img alt="" class="inline-block object-cover rounded-full h-9 w-9" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80">
                        </div>
                        <div class="flex-grow pl-3">
                          <h6 class="text-lg font-medium leading-6 text-black"> Ana Lana</h6>
                          <p class="text-base text-gray-500">@Twitter_Handle</p>
                        </div>

                      </div>
                      <div class="w-full mb-4">
                        <p class="text-base text-gray-500">
                          "When building projects, going from an idea to a working version is
                          crucial. Unwrapped's components have been extremely useful for quickly
                          mocking up a landing page"
                        </p>
                      </div>
                      <div class="w-full text">
                        <a href="#_" class="text-xs text-right text-blue-500 hover:text-black">Founder of Great company</a>
                      </div>
                    </div>


                  </div>
                </div>
              </section>
```

Updated code:

```
 <section>
                <div class="relative mx-auto w-full max-w-7xl cursor-pointer items-center px-5 py-12 md:px-12 lg:px-20">
                    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {testimonials.map((person) => (
                            <div class="mx-auto inline-block transform rounded-2xl bg-gray-100 p-4 text-left align-bottom transition-all sm:p-8 sm:align-middle">
                                <div class="mb-4 flex w-full">
                                    <div class="overflow-hidden">
                                        <img
                                            alt=""
                                            class="inline-block h-9 w-9 rounded-full object-cover"
                                            src={person.imgUrl}
                                        />
                                    </div>
                                    <div class="flex-grow pl-3">
                                        <h6 class="text-lg font-medium leading-6 text-black">
                                            {person.name}
                                        </h6>
                                        <p class="text-base text-gray-500">{person.handle}</p>
                                    </div>
                                </div>
                                <div class="mb-4 w-full">
                                    <p class="text-base text-gray-500">{person.review}</p>
                                </div>
                                <div class="text w-full">
                                    <a
                                        href="#_"
                                        class="text-right text-xs text-blue-500 hover:text-black"
                                    >
                                        {person.hotelName}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
```

### Source backend/src/controllers/checkoutControllers/checkoutConroller.js

Reference: [Stripe Checkout session](https://docs.stripe.com/api/checkout/sessions)

```
const stripe = require('stripe')('sk_test_Hrs6SAopgFPF0bZXSN3f6ELN');
const session = await stripe.checkout.sessions.create({
  success_url: 'https://example.com/success',
  line_items: [
    {
      price: 'price_1MotwRLkdIwHu7ixYcPLm5uZ',
      quantity: 2,
    },
  ],
  mode: 'payment',
});

```

Updated code:

```
export const checkout = async (req, res) => {
  try {
    const item = await getCheckoutItem(req.body.listingId);
    const userID = req.userId;
    const session = await stripeClient.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "cad",
            product_data: {
              name: item.name,
            },
            unit_amount: item.priceInCents,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${redirect.success}?user_id=${userID}&session_id={CHECKOUT_SESSION_ID}&listing_id=${req.body.listingId}&price=${item.priceInCents}`,
      cancel_url: `${redirect.cancel}?user_id=${userID}&session_id={CHECKOUT_SESSION_ID}&listing_id=${req.body.listingId}&price=${item.priceInCents}`,
    });
    res.json({ url: session.url })
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
};
```

### Source: frontend/src/components/listing

Referenced code: [BookStay Pro](https://github.com/iZooGooD/stay-booker-hotel-booking-react-frontend)

```
import { faStar, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { formatPrice } from 'utils/price-helpers';

const HotelViewCard = (props) => {
  const {
    id: hotelCode,
    image,
    title,
    subtitle,
    benefits,
    price,
    ratings,
  } = props;
  const navigate = useNavigate();
  const onBookNowClick = () => {
    navigate(`/hotel/${hotelCode}`);
  };

  return (
    <div
      className="card border p-4 flex flex-col md:flex-row gap-x-2 w-full"
      data-testid="hotel-view-card"
    >
      <div className="cursor-pointer">
        <Link
          to={`/hotel/${hotelCode}`}
          className="block text-slate-700 hover:text-brand transition-colors duration-300"
        >
          <img
            src={image.imageUrl}
            alt={image.accessibleText}
            className="md:w-[220px] md:h-[140px]"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-between ml-0 md:ml-2 flex-1">
        <div>
          <Link
            to={`/hotel/${hotelCode}`}
            className="block text-slate-700 hover:text-brand transition-colors duration-300"
          >
            <h4 className="text-2xl font-bold text-slate-600">{title}</h4>
          </Link>
          <p className="text-slate-600 text-sm">{subtitle}</p>
        </div>
        <ul>
          {benefits.length > 0 &&
            benefits.map((benefit, index) => (
              <li className="text-green-800 font-medium text-sm" key={index}>
                <FontAwesomeIcon icon={faCheck} /> {benefit}
              </li>
            ))}
        </ul>
      </div>
      <div className="flex flex-col ml-0 md:ml-auto justify-between border-l-0 md:border-l-2 items-stretch pl-0 md:pl-4">
        <div className="flex justify-between my-3 md:my-0 items-center md:flex-col md:justify-between w-full h-full">
          <h4 className="font-medium text-sm text-white bg-brand p-2">
            {ratings} <FontAwesomeIcon icon={faStar} />
          </h4>
          <p className="text-slate-600 font-bold whitespace-nowrap">
            ₹ {formatPrice(price)}
          </p>
        </div>
        <button
          className=" bg-brand-secondary px-4 py-2 text-white whitespace-nowrap"
          onClick={onBookNowClick}
        >
          Book now
        </button>
      </div>
    </div>
  );
};

export default HotelViewCard;
```

Updated code:

```
import React, { useEffect, useState } from "react";
import ReactImageGallery from "react-image-gallery";
import BookingSidebar from "./BookingSidebar";
import Reviews from "../reviews/Reviews";
import { useParams } from "react-router-dom";
import axios from "axios";

const Booking = () => {
    const { id } = useParams();
    const userId = localStorage.getItem("userId");
    const [hotelDetails, setHotelDetails] = useState({});
    const [image, setImage] = useState([]);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [rating, setRating] = useState();
    const [comment, setComment] = useState();
    const token = localStorage.getItem("token");
    const fetchHotelDetails = async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BACKEND_URL}/api/listings/listings/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            setHotelDetails(response.data);
        } catch (error) {
            console.error("Error fetching hotel details:", error);
        }
    };

    useEffect(() => {
        fetchHotelDetails();
    }, []);

    const add_review_url = `${process.env.REACT_APP_BACKEND_URL}/api/listings/add_review`;
    // add review submit api call to backend
    const callReviewSubmit = async () => {
        const reviewData = {
            listingId: id,
            userId: userId,
            firstName: firstName,
            lastName: lastName,
            rating: rating,
            comment: comment
        };

        const response = await axios.post(add_review_url, reviewData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        setFirstName("");
        setLastName("");
        setRating("");
        setComment("");
        fetchHotelDetails();
    };

    const images = hotelDetails?.img?.map((image) => ({
        original: image,
        thumbnail: image,
        thumbnailClass: "h-[80px]",
        thumbnailLoading: "lazy"
    }));

    const [reviewData, setReviewData] = useState({
        isLoading: true,
        data: []
    });

    return (
        <div className="container mx-auto mt-20 flex flex-wrap items-start justify-center p-4 md:flex-nowrap">
            <div className="w-[800px] overflow-hidden rounded-lg bg-white shadow-lg">
                <div>
                    <div className="relative w-full">
                        <ReactImageGallery
                            items={images ?? []}
                            showPlayButton={false}
                            showFullscreenButton={false}
                            infinite={true}
                            lazyLoad={true}
                            autoPlay={true}
                            showNav={false}
                            className="max-h-48"
                        />
                    </div>
                    <div className="p-4">
                        <h2 className="mb-2 text-3xl font-semibold text-gray-800">
                            {hotelDetails.name}
                        </h2>
                        <p className="mb-4 text-sm text-gray-600">
                            Address: {hotelDetails.address}
                        </p>
                        <p className="mb-4 text-base text-gray-600">{hotelDetails.description}</p>
                        <div className="mt-4 flex items-center justify-between">
                            <div>
                                {hotelDetails.utilities && hotelDetails.utilities.length > 0 && (
                                    <div>
                                        <p className="text-base text-gray-600">
                                            Features include: {hotelDetails.utilities.join(" | ")}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t p-4">
                    <h1 className="mt-2 text-xl font-bold text-gray-700">Add Review</h1>
                    <div className="md:w-100 w-1/2 text-center lg:w-1/2">
                        <input
                            className="my-2 h-12 w-full rounded-md border-2 border-gray-400 px-2 disabled:border-gray-200"
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            className="my-2 h-12 w-full rounded-md border-2 border-gray-400 px-2 disabled:border-gray-200"
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <input
                            className="my-2 h-12 w-full rounded-md border-2 border-gray-400 px-2 disabled:border-gray-200"
                            type="number"
                            placeholder="Rating"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        />
                        <input
                            className="my-2 h-12 w-full rounded-md border-2 border-gray-400 px-2 disabled:border-gray-200"
                            type="text"
                            placeholder="Comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <button
                            className="text-1xl z-5 my-3 h-12 w-full rounded-lg bg-blue-500 px-8 py-2 text-white shadow-md hover:bg-blue-950 disabled:bg-blue-400"
                            onClick={callReviewSubmit}
                        >
                            Submit Review
                        </button>
                    </div>
                </div>

                <Reviews reviewData={hotelDetails?.reviews} />
            </div>

            <BookingSidebar hotelCode={{ ...hotelDetails }} />
        </div>
    );
};

export default Booking;

```

### Source: frontend/src/components/listing/BookingSidebar.js

Referenced code: [BookStay Pro](https://github.com/iZooGooD/stay-booker-hotel-booking-react-frontend)

```
  return (
    <div className="mx-2 bg-white shadow-xl rounded-xl overflow-hidden mt-2 md:mt-0 w-full md:w-[380px]">
      <div className="px-6 py-4 bg-brand text-white">
        <h2 className="text-xl font-bold">Booking Details</h2>
      </div>
      <div className="p-6 text-sm md:text-base">
        {/* Total Price */}
        <div className="mb-4">
          <div className="text-lg font-semibold text-gray-800 mb-1">
            Total Price
          </div>
          <div className="text-xl font-bold text-indigo-600">{total}</div>
          <div className="text-sm text-green-600">
            {bookingDetails.cancellationPolicy}
          </div>
        </div>

        {/* Dates & Time */}
        <div className="mb-4">
          <div className="font-semibold text-gray-800">Dates & Time</div>
          <div className="text-gray-600">
            <DateRangePicker
              isDatePickerVisible={isDatePickerVisible}
              onDatePickerIconClick={onDatePickerIconClick}
              onDateChangeHandler={onDateChangeHandler}
              setisDatePickerVisible={setisDatePickerVisible}
              dateRange={dateRange}
              inputStyle="DARK"
            />
          </div>
        </div>

        {/* Reservation */}
        <div className="mb-4">
          <div className="font-semibold text-gray-800">Reservation</div>
          <Select
            value={selectedRooms}
            onChange={handleRoomsNumberChange}
            options={roomNumberOptions}
            className="mb-2"
          />
          <Select
            value={selectedGuests}
            onChange={handleGuestsNumberChange}
            options={guestOptions}
          />
        </div>

        {/* Room Type */}
        <div className="mb-4">
          <div className="font-semibold text-gray-800">Room Type</div>
          <Select
            value={selectedRoom}
            onChange={handleRoomTypeChange}
            options={roomOptions}
          />
        </div>

        {/* Per day rate */}
        <div className="mb-4">
          <div className="font-semibold text-gray-800">Per day rate</div>
          <div className="text-gray-600">
            {formatPrice(bookingDetails.currentNightRate)} INR
          </div>
        </div>

        {/* Taxes */}
        <div className="mb-4">
          <div className="font-semibold text-gray-800">Taxes</div>
          <div className="text-gray-600">{taxes}</div>
          <div className="text-xs text-gray-500">{DEFAULT_TAX_DETAILS}</div>
        </div>

        {errorMessage && (
          <Toast
            type="error"
            message={errorMessage}
            dismissError={dismissError}
          />
        )}
      </div>
      <div className="px-6 py-4 bg-gray-50">
        <button
          onClick={onBookingConfirm}
          className="w-full bg-brand-secondary text-white py-2 rounded hover:bg-yellow-600 transition duration-300"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default HotelBookingDetailsCard;
```

Updated code:

```
   return (
        <>
            <div className="mx-2 mt-2 w-full overflow-hidden rounded-xl bg-white shadow-xl md:mt-0 md:w-[380px]">
                <div className="bg-blue-800 px-6 py-4">
                    <h2 className="text-xl font-bold text-white">Booking Details</h2>
                </div>
                <div className="px-6 py-2 text-sm md:text-base">
                    {/* Total Price */}
                    <div className="mb-4">
                        <div className="mb-1 text-lg font-semibold text-gray-800">Total Price</div>
                        <div className="text-xl font-bold text-indigo-600">
                            {"$ "}
                            {total === null || isNaN(total) ? hotelCode?.price?.toFixed(2) : total}
                        </div>
                        <div className="text-sm text-green-600">
                            {bookingDetails.cancellationPolicy}
                        </div>
                    </div>
                    {/* Dates & Time */}
                    <div className="mb-4">
                        <div className="font-semibold text-gray-800">Dates & Time</div>
                        <div className="text-gray-600">
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                className="mr-8 mt-1 block w-28 rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-4 text-sm text-gray-900 focus:border-orange-500 focus:ring-orange-500"
                                placeholderText="Select date start"
                            />
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                className="mr-2 mt-1 block w-28 rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-4 text-sm text-gray-900 focus:border-orange-500 focus:ring-orange-500"
                                placeholderText="Select date end"
                            />
                        </div>
                    </div>
                    {/* Reservation */}
                    <div className="mb-4">
                        <div className="mb-2 font-semibold text-gray-800">Reservation type</div>
                        <Select
                            value={selectedRooms}
                            onChange={handleRoomsNumberChange}
                            options={roomNumberOptions}
                            className="mb-4 cursor-pointer"
                        />
                        <Select
                            value={selectedGuests}
                            onChange={handleGuestsNumberChange}
                            options={guestOptions}
                        />
                    </div>

                    {/* Room Type */}
                    <div className="mb-4">
                        <div className="font-semibold text-gray-800">Room Type</div>
                        <Select
                            value={selectedRoom}
                            onChange={handleRoomTypeChange}
                            options={roomOptions}
                        />
                    </div>

                    {/* Per day rate */}
                    <div>
                        <div className="font-semibold text-gray-800">Per day rate</div>
                        <div className="text-gray-600">$ {hotelCode.price} / day</div>
                    </div>
                </div>
                <div className="bg-gray-50 px-6 pb-4">
                    {storedUserType === "Service Provider" ? (
                        <div></div>
                    ) : (
                        <button
                            onClick={onBookingConfirm}
                            className="w-full rounded bg-orange-600 py-2 text-white transition duration-300 hover:bg-orange-800"
                        >
                            Confirm Booking
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default BookingSidebar;

```

## Acknowledgments

- ⁠The project and its components were created by referring to the official documentation of the respective packages and components mentioned. The documentation was very helpful in understanding the usage of the components and how to make the best use of them.
- ⁠Styling was done using [Tailwind CSS](https://tailwindcss.com/docs/), and the official documentation was referred to for understanding to use them effectively.
