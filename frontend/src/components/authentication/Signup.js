/**
 * Created By: Divyank Mayankkumar Shah
 * BannerId : B00966377
 */

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [userType, setUserType] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [termsAccepted, setTermsAccepted] = useState(false);

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
    var nameRegex = /^[A-Za-z]+$/;

    const navigate = useNavigate();

    const validateForm = () => {
        if (firstName === "") {
            toast.error("First Name is required");
            return false;
        } else if (!nameRegex.test(firstName)) {
            toast.error("First Name can only have alphabets");
            return false;
        } else if (!lastName) {
            toast.error("Last Name is required");
            return false;
        } else if (!nameRegex.test(lastName)) {
            toast.error("Last Name can only have alphabets");
            return false;
        } else if (!email) {
            toast.error("Email is required");
            return false;
        } else if (!emailRegex.test(email)) {
            toast.error("Email is not in valid format");
            return false;
        } else if (!userType || userType === "User Type") {
            toast.error("Select User Type");
            return false;
        } else if (!password) {
            toast.error("Password is required");
            return false;
        } else if (password.length < 7) {
            toast.error("Minimum length of password should be 8 characters.");
            return false;
        } else if (!passwordRegex.test(password)) {
            toast.error(
                <div>
                    <p>Password must fullfil following conditions: </p>
                    <ul>
                        <li>Minimum 1 uppercase alphabet.</li>
                        <li>Minimum 1 lowercase alphabet.</li>
                        <li>Minimum 1 number.</li>
                        <li>Minimum 1 special character (!@#$%^&*).</li>
                    </ul>
                </div>
            );
            return false;
        } else if (!confirmPassword) {
            toast.error("Confirm Password is required");
            return false;
        } else if (password !== confirmPassword) {
            toast.error("Password and Confirm Password do not match");
            return false;
        } else if (!termsAccepted) {
            toast.error("You must agree to Terms and Conditions");
            return false;
        }
        return true;
    };
    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
    };

    const callSignUp = async () => {
        try {
            if (validateForm()) {
                const userData = {
                    firstName: firstName,
                    lastName: lastName,
                    userType: userType.replace(" ", "_").toUpperCase(),
                    email: email,
                    password: password
                };
                const backend_signup_url = `${process.env.REACT_APP_BACKEND_URL}/api/auth/signup`;

                const response = await axios.post(backend_signup_url, userData);
                if (response.data.message === "User already exists") {
                    toast.error("User already exists");
                } else {
                    toast.success("Successfully signed up.");
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("userType", userType);
                    localStorage.setItem("userId", response.data.userId);
                    if (userType === "User") {
                        // change to user route
                        navigate("/create-profile", { state: { firstName, lastName, email } });
                    } else {
                        // change to service provider route
                        navigate("/service-provider", { state: { firstName, lastName, email } });
                    }
                }
            }
        } catch (error) {
            console.log("Error:", error);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="mt-20 text-center">
                <h1 className="text-primary text-2xl font-bold">Sign Up</h1>
                <div className="mx-auto my-6 w-3/4 p-2 text-center md:w-1/2 lg:w-1/4">
                    <div className="flex py-2">
                        <input
                            className="h-12 w-full rounded-md border-2 border-gray-400 px-2 disabled:border-gray-200"
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="flex py-2">
                        <input
                            className="h-12 w-full rounded-md border-2 border-gray-400 px-2 disabled:border-gray-200"
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="flex py-2">
                        <input
                            className="h-12 w-full rounded-md border-2 border-gray-400 px-2 disabled:border-gray-200"
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex py-2">
                        <select
                            placeholder="User Type"
                            className="h-12 w-full rounded-md border-2 border-gray-400 px-2 disabled:border-gray-200"
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}
                        >
                            <option name="ut"> User Type</option>
                            <option name="customer">User</option>
                            <option name="serviceProvider">Service Provider</option>
                        </select>
                    </div>
                    <div className="flex py-2">
                        <input
                            className="h-12 w-full rounded-md border-2 border-gray-400 px-2 disabled:border-gray-200"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex py-2">
                        <input
                            className="h-12 w-full rounded-md border-2 border-gray-400 px-2 disabled:border-gray-200"
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex py-2">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2"
                                checked={termsAccepted}
                                onChange={() => setTermsAccepted(!termsAccepted)}
                            />
                            <label htmlFor="terms" className="text-gray-900">
                                I agree with the{" "}
                                <button
                                    onClick={openPopup}
                                    className="text-blue-600 hover:underline"
                                >
                                    terms and conditions
                                </button>
                            </label>

                            {isOpen && (
                                <div className="absolute inset-0 mx-auto flex items-center justify-center overflow-auto bg-gray-800 bg-opacity-70 p-4">
                                    <div className="relative mx-auto mb-4 mt-4 h-[500px] w-[500px] max-w-xs justify-center overflow-auto rounded-lg bg-white p-4 sm:max-w-sm md:max-w-md md:p-6 lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
                                        <h1 className="mb-2 text-lg font-semibold md:text-xl">
                                            Terms and Conditions
                                        </h1>
                                        <h2 className="text-md md:text-lg">1. Booking Process:</h2>
                                        <p className="text-sm md:text-base">
                                            When you make a booking through BookAStay, you are
                                            entering into a direct contractual relationship with the
                                            hotel you book.
                                        </p>

                                        <h2>2. Payment:</h2>
                                        <p>
                                            Payment for your booking will be processed securely
                                            through our payment gateway.
                                        </p>
                                        <p>
                                            You may be required to provide a valid credit card or
                                            other payment method at the time of booking.
                                        </p>
                                        <p>
                                            Prices displayed on the Website are inclusive of all
                                            taxes, unless otherwise stated.
                                        </p>

                                        <h2>3. Cancellations and Refunds:</h2>
                                        <p>
                                            Cancellation policies vary depending on the hotel and
                                            room type. Please review the cancellation policy
                                            provided during the booking process.
                                        </p>
                                        <p>
                                            Refunds, if applicable, will be processed in accordance
                                            with the hotel's cancellation policy.
                                        </p>
                                        <p>
                                            BookAStay may charge a cancellation fee or service fee,
                                            as specified during the booking process.
                                        </p>

                                        <h2>4. Modifications:</h2>
                                        <p>
                                            Any modifications to your booking must be made through
                                            BookAStay, subject to availability and the hotel's
                                            policies.
                                        </p>
                                        <p>
                                            Additional charges may apply for modifications to your
                                            booking.
                                        </p>

                                        <h2>5. User Accounts:</h2>
                                        <p>
                                            You may be required to create a user account to access
                                            certain features of the Website.
                                        </p>
                                        <p>
                                            You are responsible for maintaining the confidentiality
                                            of your account and password and for restricting access
                                            to your account.
                                        </p>

                                        <h2>6. Privacy Policy:</h2>
                                        <p>
                                            Your use of the Website is subject to our Privacy
                                            Policy, which can be found{" "}
                                            <a href="link-to-privacy-policy">here</a>.
                                        </p>
                                        <p>
                                            By using the Website, you consent to the collection and
                                            use of your information in accordance with our Privacy
                                            Policy.
                                        </p>

                                        <h2>7. Limitation of Liability:</h2>
                                        <p>
                                            BookAStay acts solely as an intermediary between you and
                                            the hotel. We shall not be liable for any damages,
                                            losses, or expenses arising out of your use of the
                                            Website or the services provided through the Website.
                                        </p>
                                        <p>
                                            In no event shall BookAStay be liable for any indirect,
                                            incidental, special, consequential, or punitive damages.
                                        </p>

                                        <h2>8. Governing Law:</h2>
                                        <p>
                                            These Terms shall be governed by and construed in
                                            accordance with the laws of [Jurisdiction], without
                                            regard to its conflict of law provisions.
                                        </p>

                                        <h2>9. Changes to Terms:</h2>
                                        <p>
                                            BookAStay reserves the right to update or modify these
                                            Terms at any time without prior notice. Your continued
                                            use of the Website after any such changes constitutes
                                            your acceptance of the new Terms.
                                        </p>

                                        <h2>10. Contact Us:</h2>
                                        <p>
                                            If you have any questions about these Terms, please
                                            contact us at{" "}
                                            <a href="mailto:bookastayteam@email.com">
                                                bookastayteam@email.com
                                            </a>
                                            .
                                        </p>
                                        <button
                                            onClick={closePopup}
                                            className="mt-4 rounded bg-blue-500 px-3 py-2 font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 md:px-4"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            )}
                        </label>
                    </div>
                    <button
                        className="text-1xl z-5 my-3 h-12 w-fit rounded-lg bg-blue-500 px-8 py-2 text-white shadow-md hover:bg-blue-950 disabled:bg-blue-400"
                        onClick={callSignUp}
                    >
                        Sign Up
                    </button>
                    <p className="cursor-pointer text-center">
                        Already a User?{" "}
                        <Link to={"/login"}>
                            <span className="cursor-pointer underline hover:text-gray-400">
                                Login
                            </span>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Signup;
