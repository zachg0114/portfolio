import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
} from "@nextui-org/react";
import emailjs from "emailjs-com";

export default function ContactModal({ isOpen, onOpenChange }) {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true);

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    const templateParams = {
      user_email: email,
      reply_to: email,
      subject: subject,
      message: message,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, userID);
      setSuccess(true);
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("An error occurred while sending the email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="blur"
      classNames={{
        base: "z-50 bg-gray-900 text-white rounded-lg",
      }}
    >
      <ModalContent>
        <div className="p-6">
          <ModalHeader className="text-2xl font-semibold text-center">
            Contact Me
          </ModalHeader>
          <ModalBody>
            {!success ? (
              <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}
              >
                <div>
                  <label className="block text-gray-400 text-sm mb-1">Email</label>
                  <Input
                    fullWidth
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-lg bg-gray-800 text-white border-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">Subject</label>
                  <Input
                    fullWidth
                    required
                    placeholder="Enter the subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="rounded-lg bg-gray-800 text-white border-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">Message</label>
                  <Textarea
                    fullWidth
                    required
                    placeholder="Write your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="rounded-lg bg-gray-800 text-white border-none"
                  />
                </div>
              </form>
            ) : (
              <div className="text-center text-green-500">
                <p>Your message has been sent! Thank you for reaching out.</p>
              </div>
            )}
          </ModalBody>
          <ModalFooter className="flex justify-end">
            {!success ? (
              <>
                <Button
                  auto
                  flat
                  color="error"
                  onPress={onOpenChange}
                  className="rounded-lg"
                >
                  Cancel
                </Button>
                <Button
                  auto
                  color="primary"
                  disabled={!email || !subject || !message || loading}
                  type="submit"
                  className="rounded-lg"
                  onClick={handleSubmit}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </>
            ) : (
              <Button
                auto
                onPress={onOpenChange}
                color="success"
                className="rounded-lg"
              >
                Close
              </Button>
            )}
          </ModalFooter>
        </div>
      </ModalContent>
    </Modal>
  );
}
