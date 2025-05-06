"use client";

const ShareButtons = () => {
  const socialLinks = [
    {
      link: "https://www.facebook.com/qomra.studios",
      icon: "fab fa-facebook-f",
      title: "Facebook",
    },
    {
      link: "https://www.instagram.com/qomra.studios/",
      icon: "fab fa-instagram",
      title: "Instagram",
    },

    {
      link: "https://www.youtube.com/@QomraStudios",
      icon: "fab fa-youtube",
      title: "YouTube",
    },
    {
      link: "https://www.linkedin.com/company/qomra-studios/",
      icon: "fab fa-linkedin-in",
      title: "LinkedIn",
    },
  ];

  return (
    <div className="mil-share mil-mb120 mil-up">
      <p>Follow Us:</p>
      <ul className="mil-social">
        {socialLinks.map((social, index) => (
          <li key={index} className="mil-c-gone">
            <a
              href={social.link}
              target="_blank"
              rel="noreferrer noopener"
              title={social.title}
              aria-label={social.title}
            >
              <i className={social.icon}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShareButtons;
