"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  export default function FAQ() {


    const data = {
        "FAQs": [
          {
            "question": "What does Bundee stand for?",
            "answer": "As with most start-ups, we started with an idea and started building/prototyping based on that idea.  In a few weeks, we had a good no-code prototype and realized we needed a brand and a company to stand behind the platform we were getting ready to build/deploy.  Umesh, one of the early founders,proposed the name Bundee and it seemed to have good ring to it and we decided to ride with it. Bundee in Kannada (Umesh’s mother tongue) stands for a vehicle."
          },
          {
            "question": "Where are you currently available?",
            "answer": "Currently, our cars are available in Austin, Tx.  Our inventory is small right now (50 vehicles) but more cars are being added daily.  We are coming soon to Dallas, San Antonio and Houston.  And in the coming months, we are launching in many additional cities across the US."
          },
          {
            "question": "Why aren’t you available in more cities?",
            "answer": "We are working closely with small and mid-size Fleet owners to make sure we have the right features to ensure their success (and eventually ours)  We want to dothat by launching in select markets first, then get a lot of feedback and implement that feedback in the platform before bringing on more markets.  We expect to cover more cities in the coming months"
          },
          {
            "question": "How do I search for available vehicles on mybundee.com?",
            "answer": "It is quite easy to rent with Bundee.  You can visit our Website (mybundee.com) or download the mybundee app for IOS and Android.  Once you have the app, just search based on the city and desired dates and the app will return the available vehicles, Host details, pick and drop off locations and additional information about the vehicle/host."
          },
          {
            "question": "What info do you need to book a car?",
            "answer": "Once you have searched and selected a vehicle, you will need to register with us to book a vehicle.  Registering is easy.  You will also need to enter your credit card information to hold that vehicle for you as well as enter your Driver License information online.  It’s easy and takes just a few mins to complete."
          },
          {
            "question": "What is the cancellation policy?",
            "answer": "Each Host and trip will have its own cancellation policy that is clearly stated during the booking process as well as in the confirmation emails.  You can also see more details for cancellation under the Trips section."
          },
          {
            "question": "What about Insurance for the trip?",
            "answer": "During the initial stages of the rollout of Bundee, we require the Driver to carry their own insurance that covers liability and collision damage.  Your Host will check your insurance coverage during the check-out process.  In the future, we will offer additional insurance coverage through established carriers at an additional price"
          },
          {
            "question": "Can the vehicle I booked be delivered to me?",
            "answer": "Some hosts offer delivery to various points of interest like airports, hotels, attractions and/or to custom locations.  Some hosts offer free delivery while others might have an additional charge.  Delivery fee, if any is clearly stated during the reservation process."
          }
        ]
      };

    return (
        <>
        <div id="faqs" className="mx-auto max-w-2xl px-4 py-16 my-10 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8 w-full">
            <div className="p-4 font-bold text-3xl bg-white  text-black justify-center text-center">Frequently Asked Questions</div>
          <Accordion type="single" collapsible className="w-full mt-10">
            {data.FAQs.map((faq, index) => (
              <AccordionItem key={`item-${index}`} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </>
    )
  }
