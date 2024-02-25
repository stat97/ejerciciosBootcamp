
export const SocialMedia = () => {
  const socialmedia = [
    {
      linkedin:
        "https://www.linkedin.com/in/adri%C3%A1n-ol%C3%ADas-ortiz-8b7a9b254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/stat97",
    },
  ];

  const { linkedin, github } = socialmedia[0];

  return (
    <div>
      <h4>
        <a href={linkedin}>
          LinkedIn
        </a>
      </h4>
      <h4>
        <a href={github}>
          GitHub
        </a>
      </h4>
    </div>
  );
};


