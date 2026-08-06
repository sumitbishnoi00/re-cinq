'use client';
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS } from "@/utils/helper";
import Button from "./Button";



const Footer = () => {

    const form = useRef();

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };


    const sendEmail = (e) => {
        e.preventDefault();

        if (!email.trim()) {
            setError("Email is required.");
            return;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setError("");

        emailjs
            .sendForm(
                "service_cv19wq5",
                "template_88enle2",
                form.current,
                {
                    publicKey: "G7B440zUWdQT5j7yw",
                }
            )
            .then(() => {
                Swal.fire({
                    title: "Good job!",
                    text: "Subscribed Successfully!",
                    icon: "success",
                    confirmButtonColor: "#F97316",
                });

                form.current.reset();
                setEmail("");
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong. Please try again.",
                    confirmButtonColor: "#EF4444",
                });

                console.error(error);
            });
    };
    return (

        <section className='px-4 pt-15 sm:pt-17.5 md:pt-20 bg-black -mt-px'>
            <div className='max-w-7xl w-full mx-auto flex flex-col items-center'>
                <div className='flex min-[743px]:gap-6 max-lg:flex-col max-[956px]:pr-20 max-[850px]:pr-0 flex-row w-full justify-between'>
                    <div className='max-w-85.5 w-full flex flex-col gap-6.25'>
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/assets/webg/Footer-logo.webp"
                                alt="Company Logo"
                                width={148.57}
                                height={40}
                                className="h-10 w-auto"
                            />
                        </Link>

                        <p className='font-normal text-sm sm:text-base leading-156 text-cool-gray'>re:cinq is a tech consultancy helping medium and large organizations transition from Cloud Native to AI Native by building scalable AI platforms, improving software development with AI, and guiding teams through technical and organizational transformation.</p>
                    </div>

                    <div className="max-w-209 w-full flex min-[1060px]:gap-25.5 justify-between gap-8 flex-col sm:flex-row ">
                        <div className='max-w-94 mt-10 min-[758px]:mt-0 w-full'>
                            <div className="flex min-[1060px]:gap-25.5 flex-row justify-between">
                                {FOOTER_LINKS.map((section, index) => (
                                    <div key={index} className="gap-5 flex flex-col items-start">
                                        <h3 className="font-medium md:text-xl text-lg leading-120 text-white">
                                            {section.title}
                                        </h3>

                                        <ul className="text-cool-gray space-y-3 text-start ">
                                            {section.links.map((link, idx) => (
                                                <li
                                                    key={idx}
                                                    className="font-normal lg:text-base w-fit text-sm leading-156 hover:underline transition-all duration-500 "
                                                >
                                                    <Link href={"/"} ><p className="leading-156">{link}</p></Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="max-w-89.5 w-full flex min-[758px]:mt-0 mt-4 sm:mt-10 flex-col text-start">
                            <h2 className="font-medium text-xl leading-120 text-white mb-5">
                                Newsletter
                            </h2>

                            <form ref={form} onSubmit={sendEmail}>
                                <input
                                    type="email"
                                    name="user_email"
                                    value={email}
                                  
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (error) setError("");
                                    }}
                                    placeholder="Enter your email"
                                    className={`border rounded-[9px] px-6 py-[14.5px] w-full font-normal text-base leading-156 outline-none bg-jet-black text-light-gray placeholder:text-light-gray ${error
                                            ? "border-red-500"
                                            : "border-dark-charcoal focus:border-primary"
                                        }`}
                                />
                                {error && (
                                    <p className="mt-2 text-sm text-red-500">{error}</p>
                                )}

                                <p className="max-w-82 w-full font-normal lg:text-base text-sm leading-156 text-cool-gray mt-3 mb-6.25">
                                    Be The First One To Get Latest Updates And Stay Connected
                                </p>

                                <Button type="submit" vari={"not"}>
                                    Subscribe Now
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="w-full border border-dark-gray mb-5 sm:mb-8 mt-8 sm:mt-11 md:mt-15"></div>

                <div className="w-full flex flex-wrap flex-row items-center gap-2.5 sm:justify-between mb-4 sm:mb-[22.12px] max-[785px]:justify-center">
                    <span className="font-normal text-xs min-[550px]:text-base leading-166 sm:leading-141 tracking-[-1%] text-white">© 2024-{new Date().getFullYear()} re:cinq. All Rights Reserved.</span>
                    <ul className="flex items-center gap-1 sm:gap-3 ">
                        <li>
                            <Link href="#" className="hover:text-spanish-gray transition-colors font-normal text-xs min-[550px]:text-base  tracking-[-1%] text-white">
                                <p className="leading-166 sm:leading-144"> Partner & Referral Program</p>
                            </Link>
                        </li>
                        <li className="text-spanish-gray max-sm:leading-100">•</li>
                        <li>
                            <Link href="#" className="hover:text-spanish-gray transition-colors font-normal text-xs min-[550px]:text-base  tracking-[-1%] text-white">
                                <p className="leading-166 sm:leading-144"> Privacy Policy</p>
                            </Link>
                        </li>
                        <li className="text-spanish-gray max-sm:leading-100">•</li>
                        <li>
                            <Link href="#" className="hover:text-spanish-gray transition-colors font-normal text-xs min-[550px]:text-base   tracking-[-1%] text-white">
                                <p className="leading-166 sm:leading-144">Terms & Conditions</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer