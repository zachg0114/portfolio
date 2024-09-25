'use client'; // Client-side component

const ContactButton = () => {
  return (
    <a
      href="mailto:zachgreene88@gmail.com"
      className="inline-block bg-[#a855f7] text-black text-lg font-semibold px-6 py-3 rounded-md hover:bg-purple-500 transition duration-300"
    >
      <i className="fas fa-envelope"></i> Contact me
    </a>
  );
};

export default ContactButton;
