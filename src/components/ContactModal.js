import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";
import emailjs from "emailjs-com";

export default function ContactModal({ isOpen, onOpenChange }) {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    const templateParams = {
      user_email: email,
      subject,
      message: content,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, userID);
      setSuccess(true);
      setEmail("");
      setSubject("");
      setContent("");
    } catch (error) {
      console.error("Failed to send email:", error);
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
        base: "bg-black/50",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>Contact Me</ModalHeader>
            <ModalBody>
              {!success ? (
                <form>
                  <Input
                    fullWidth
                    required
                    label="Your Email"
                    placeholder="example@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    fullWidth
                    required
                    label="Subject"
                    placeholder="Enter the subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="mt-4"
                  />
                  <Input
                    fullWidth
                    as="textarea"
                    required
                    rows={4}
                    label="Message"
                    placeholder="Enter your message"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="mt-4"
                  />
                </form>
              ) : (
                <div className="text-center text-green-500">
                  <p>Thank you for reaching out! Your message has been sent.</p>
                </div>
              )}
            </ModalBody>
            <ModalFooter>
              {!success && (
                <>
                  <Button color="danger" variant="light" onPress={onOpenChange}>
                    Cancel
                  </Button>
                  <Button
                    color="primary"
                    disabled={!email || !subject || !content || loading}
                    onPress={handleSubmit}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </>
              )}
              {success && (
                <Button color="primary" onPress={onOpenChange}>
                  Close
                </Button>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
