"use client";
import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { HiOutlineMapPin, HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { sendEmail } from "@/app/actions/sendEmail";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null, "success", "error"
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    startTransition(async () => {
      const result = await sendEmail(null, data);
      if (result?.success) {
        setStatus("success");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
        <div className="w-full">
          <div className="flex flex-col xl:flex-row gap-6">
            {/* info text */}
            <div className="flex-1 xl:w-[600px] flex flex-col gap-12">
              {/* text */}
              <div>
                <h2 className="h2 mb-6">
                  Get In <span className="text-accent">Touch</span>
                </h2>
                <p className="max-w-[460px]">
                  Send me a quick message and let's start automating things!
                </p>
              </div>
              {/* info */}
              <div className="flex flex-col gap-8 mb-6 xl:mb-0">
                {/* phone */}
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlinePhone className="text-2xl" />
                  </span>
                  <span>+44 7884 043 472</span>
                </div>
                {/* email */}
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMail className="text-2xl" />
                  </span>
                  <span>stanciuvalentinvasile@gmail.com</span>
                </div>
                {/* location */}
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMapPin className="text-2xl" />
                  </span>
                  <span>London, UK</span>
                </div>
              </div>
            </div>
            {/* form */}
            <div className="flex-1">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 items-start">
                
                {status === "success" && (
                  <div className="bg-green-500/20 text-green-400 p-4 rounded-md w-full">
                    Message sent successfully!
                  </div>
                )}
                {status === "error" && (
                  <div className="bg-red-500/20 text-red-400 p-4 rounded-md w-full">
                    Something went wrong. Please try again.
                  </div>
                )}

                {/* first and last name */}
                <div className="flex flex-col xl:flex-row gap-6 w-full">
                  <div className="w-full">
                    <Label htmlFor="firstname">Firstname <span className="text-accent">*</span></Label>
                    <Input
                      type="text"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="lastname">Lastname <span className="text-accent">*</span></Label>
                    <Input
                      type="text"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>
                {/* email & phone */}
                <div className="flex flex-col xl:flex-row gap-6 w-full">
                  <div className="w-full">
                    <Label htmlFor="email">Email <span className="text-accent">*</span></Label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="youremail@gmail.com"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 123 456 789"
                    />
                  </div>
                </div>
                {/* select */}
                <div className="w-full">
                  <Label htmlFor="service">I'm interested in <span className="text-accent">*</span></Label>
                  <Select onValueChange={handleSelectChange} value={formData.service} required>
                    <SelectTrigger className="w-full !h-12 bg-white/5 border-white/10 px-4">
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-white/20">
                      <SelectItem value="automation">Test Automation</SelectItem>
                      <SelectItem value="performance">Performance Testing</SelectItem>
                      <SelectItem value="contract">Contract Testing</SelectItem>
                      <SelectItem value="consulting">QA Consulting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* textarea */}
                <div className="w-full">
                  <Label htmlFor="message">Message <span className="text-accent">*</span></Label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message.."
                    className="min-h-[160px] bg-white/5 border-white/10 focus-visible:border-accent focus-visible:ring-accent focus-visible:ring-[1px] resize-none p-4 selection:bg-accent placeholder:text-white/50"
                    required
                  />
                </div>
                {/* btn */}
                <button 
                  type="submit" 
                  disabled={isPending}
                  className="btn btn-lg btn-accent disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-medium">{isPending ? "Sending..." : "Send message"}</span>
                    {!isPending && <HiOutlineArrowLongRight className="text-xl" />}
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
