"use client";

import React from "react";
import { useState } from "react";
import FileInput from "./_components/FileInput";
import InfoBanner from "@/components/InfoBanner";

const Donate = () => {
    const [ShownComponent, setShownComponent] = useState({ shown: "esewa" });
    return (
        <>
            <main className="px-standard w-full md:max-w-[750px] md:mx-auto md:px-0 space-y-block">
                <div className="my-block text-faded mx-[0]  space-y-small">
                    <h2 className="text-mid-title font-bold text-black-mid">Why Donate Us?</h2>
                    <p className="text-sub-para font-medium text-black-light">
                        We are a non profit organization that is working hard to promote
                        tech literacy and we don’t have any source of income and that is the
                        very reason why we encourage you to donate us.
                    </p>
                </div>
                <div className="my-block text-faded mx-[0] space-y-small">
                    <h2 className="text-mid-title font-bold text-black-mid">Donate us via</h2>
                    <div className="flex flex-wrap items-center gap-3 font-light">
                        <button
                            className={`w-fit h-12 rounded-md min-w-[145px] px-5 py-3 ${ShownComponent.shown === "esewa"
                                ? "bg-blue-blue text-white font-normal text-sub-para"
                                : "text-black-light bg-slate-200 font-normal text-sub-para"
                                }  `}
                            onClick={() => {
                                setShownComponent({ shown: "esewa" });
                            }}
                        >
                            E-Sewa
                        </button>

                        <button
                            className={`w-fit h-12 rounded-md min-w-[145px] px-5 py-3 ${ShownComponent.shown === "coffee"
                                ? "bg-blue-blue text-white font-normal  text-sub-para"
                                : "text-black-light bg-slate-200 font-normal"
                                }  `}
                            onClick={() => {
                                setShownComponent({ shown: "coffee" });
                            }}
                        >
                            Buy me a coffee
                        </button>

                        <button
                            className={`w-fit h-12 rounded-md min-w-[145px] overflow-hidden px-5 py-3 ${ShownComponent.shown === "fund"
                                ? "bg-blue-blue text-white font-normal  text-sub-para"
                                : "text-black-light bg-slate-200 font-normal"
                                }  `}
                            onClick={() => {
                                setShownComponent({ shown: "fund" });
                            }}
                        >
                            Fund Raise
                        </button>
                    </div>
                    {ShownComponent.shown === "esewa" && <EsewaDonation />}
                    {ShownComponent.shown === "fund" && <FundDonation />}
                    {ShownComponent.shown === "coffee" && <CoffeeDonation />}
                </div>
            </main>
            <InfoBanner
                leftContent={<InfoBannerLeftContent />}
                cta={{
                    text: "Mail Us",
                    link: "mailto:contact@cosognepal.org",
                }}
            />
        </>
    );
};

export default Donate;

const EsewaDonation = () => {
    const [DonationAmount, setDonationAmount] = useState({ shown: "Rs. 2,000" });

    //todo later for backend stuff
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.stopPropagation();
        e.preventDefault();
        {/* const userName = e.currentTarget["userName"].value */ }
        {/* const email = e.currentTarget["userEmail"].value */ }
        {/* const phoneNumber = e.currentTarget["phoneNumber"].value */ }
    }
    return (
        <form className="space-y-block" method="post" onSubmit={handleSubmit}>
            <div className="my-block text-title  text-faded mx-[0] md:mx-auto space-y-small ">
                <h2 className="text-mid-title font-bold text-black-mid">
                    How can you donate us?
                </h2>
                <p className="text-sub-para font-medium text-black-light">
                    You can donate us by sending your money to the below given qr code via
                    any e-banking service. And upload the below mentioned details.
                </p>
            </div>
            <div className="text-title  text-faded mx-[0] md:mx-auto space-y-small">
                <h2 className="text-mid-title font-bold text-black-mid">
                    Thank you for donating to Cosog Nepal.
                </h2>
                <p className="text-sub-para font-medium text-black-light">
                    Please fill this below form so, that we can track your donation and
                    thank you for your contribution.
                </p>
            </div>

            <div className="my-block text-title  text-faded mx-[0] md:mx-auto space-y-small">
                <h2 className="text-mid-title font-bold text-black-mid">
                    Donation Information
                </h2>
                <div className="donationContents space-y-small">
                    <p className="text-sub-para">Amount</p>
                    <input
                        className="rounded-md w-full h-12 py-3 px-2 text-black-light text-sub-para border-2 border-[#D9D9D9] focus:border-blue focus-visible:outline-none"
                        type="text"
                        placeholder="Ex: 2000"
                        value={DonationAmount.shown}
                        onChange={(e) => { setDonationAmount({ shown: e.target.value }) }}
                    />
                    <div className="flex flex-wrap items-center gap-3 text-para font-light">
                        <button
                            className={`w-fit h-12 rounded-md min-w-[145px] px-5 py-3 ${DonationAmount.shown === "Rs. 2,000"
                                ? "bg-blue-blue text-white font-normal text-sub-para"
                                : "text-black-light bg-slate-200 font-normal text-sub-para"
                                }  `}
                            onClick={() => {
                                setDonationAmount({ shown: "Rs. 2,000" });
                            }}
                        >
                            Rs. 2,000
                        </button>
                        <button
                            className={`w-fit h-12 rounded-md min-w-[145px] overflow-hidden px-5 py-3 ${DonationAmount.shown === "Rs. 3,000"
                                ? "bg-blue-blue text-white font-normal text-sub-para"
                                : "text-black-light bg-slate-200 font-normal text-sub-para"
                                }  `}
                            onClick={() => {
                                setDonationAmount({ shown: "Rs. 3,000" });
                            }}
                        >

                            Rs. 3,000
                        </button>
                        <button
                            className={`w-fit h-12 rounded-md min-w-[145px] px-5 py-3 ${DonationAmount.shown === "Rs. 4,000"
                                ? "bg-blue-blue text-white font-normal text-sub-para"
                                : "text-black-light bg-slate-200 font-normal text-sub-para"
                                }  `}
                            onClick={() => {
                                setDonationAmount({ shown: "Rs. 4,000" });
                            }}
                        >
                            Rs. 4,000
                        </button>
                        <button
                            className={`w-fit h-12 rounded-md min-w-[145px] px-5 py-3 ${DonationAmount.shown === "Rs. 5,000"
                                ? "bg-blue-blue text-white font-normal text-sub-para"
                                : "text-black-light bg-slate-200 font-normal text-sub-para"
                                }  `}
                            onClick={() => {
                                setDonationAmount({ shown: "Rs. 5,000" });
                            }}
                        >
                            Rs. 5,000
                        </button>
                    </div>
                </div>
                <div className="receptInfo">
                    <p className="text-sub-para mt-5 mb-3">Receipt</p>
                    <FileInput />
                </div>
            </div>

            <div className="my-block text-title text-faded mx-[0] md:mx-auto space-y-small">
                <h2 className="text-mid-title font-bold text-black-mid">
                    Personal Information
                </h2>
                <div>
                    <p className="text-sub-para">Name</p>
                    <input
                        className="rounded-md w-full h-12 py-3 px-2 text-black-light text-sub-para border-2 border-[#D9D9D9] focus:border-blue focus-visible:outline-none"
                        type="text"
                        placeholder="Harry smith"
                        name="userName"
                        required
                    />
                </div>
                <div>
                    <p className="text-sub-para">Email</p>
                    <input
                        className="rounded-md w-full h-12 py-3 px-2 text-black-light text-sub-para border-2 border-[#D9D9D9] focus:border-blue focus-visible:outline-none"
                        type="email"
                        placeholder="harry@smith.com"
                        name="userEmail"
                        required
                    />
                </div>
                <div>
                    <p className="text-sub-para">Phone Number</p>
                    <input
                        className="rounded-md w-full h-12 py-3 px-2 text-black-light text-sub-para border-2 border-[#D9D9D9] focus:border-blue focus-visible:outline-none"
                        type="text"
                        placeholder="985587*****"
                        name="phoneNumber"
                        required
                    />
                </div>
            </div>
            <div className="btn w-full flex text-para">
                <button
                    className={` h-12 rounded-md w-full md:w-[40%] overflow-hidden px-5 py-3 bg-blue-blue text-white hover:bg-primary transition `}
                    name="submitButton"
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};
const FundDonation = () => {
    return (
        <section>
            <div className="my-block text-title  text-faded mx-[0] md:mx-auto space-y-small">
                <h2 className="text-mid-title font-bold text-black-mid">
                    How can you donate us?
                </h2>
                <p className="text-sub-para font-medium text-black-light">
                    Visit our official
                    <a
                        href="https://www.fundraisepage.com"
                        className="text-blue-blue mx-[5px]"
                        target="blank"
                    >
                        fund raise
                    </a>
                    page and follow the instructions provided there.
                </p>
            </div>
        </section>
    );
};

const CoffeeDonation = () => {
    return (
        <section>

            <div className="my-block text-title  text-faded mx-[0] md:mx-auto mb-block space-y-small">
                <h2 className="text-mid-title font-bold text-black-mid">
                    How can you donate us?
                </h2>
                <p className="text-sub-para font-medium text-black-light">
                    Visit our official
                    <a
                        href="https://www.buymeacoffee.com/cosognepal"
                        className=" text-blue-blue mx-[5px]"
                        target="blank"
                    >
                        Buy me a Coffee
                    </a>
                    page and follow the instructions provided there.
                    To buy us some helping hands(Volunteers).
                </p>
            </div>
        </section>
    );
};

const InfoBannerLeftContent = () => {
    return (
        <div className="flex flex-col space-y-small">
            <div className="">
                <h2 className="text-sub-title font-bold ">
                    Experiencing any problems while donating?
                </h2>
            </div>
            <div className="text-para font-medium">
                Contact us using<br />
                Phone <span className="font-bold">+977 9867676676</span> <br />
                Email < span className="font-bold" > contact@cosognepal.org</span >
            </div >

            <p className="text-para font-medium ">
                We are available 24/7 every single day of the week.
            </p>
        </div >
    );
};
