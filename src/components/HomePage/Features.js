import React from "react";

const features = [
  {
    title: "Search Data",
    description:
      "Don’t worry if your data is very large, the Data Warehouse provides a search engine, which is useful for making it easier to find data effectively saving time.",
    icon:  '🔍', // Replace with the actual path to the image
    bgColor: "#E3F0FC",
  },
  {
    title: "24 Hours Access",
    description:
      "Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.",
    icon: "/path-to-your-icon/access-icon.png", // Replace with actual path
    bgColor: "#F5E8F8",
  },
  {
    title: "Print Out",
    description:
      "Print out service gives you convenience if someday you need print data, just edit it all and just print it.",
    icon: "/path-to-your-icon/print-icon.png", // Replace with actual path
    bgColor: "#FDE9F0",
  },
  {
    title: "Security Code",
    description:
      "Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.",
    icon: "/path-to-your-icon/security-icon.png", // Replace with actual path
    bgColor: "#E7F7F4",
  },
];

const Features = () => {
  return (
    <section className="text-center p-5" style={{ backgroundColor: "#f8f8f8" }}>
      <h2 className="mb-6" style={{ fontSize: "36px", fontWeight: "bold" }}>
        Features
      </h2>
      <p style={{ marginBottom: "40px", color: "#666", fontSize: "18px" }}>
        Some of the features and advantages that we provide for those of you who
        store data in this Data Warehouse.
      </p>
      <div className="row">
        {features.map((feature, index) => (
          <div key={index} className="col-md-6 mb-6">
            <div
              className="p-4"
              style={{
                backgroundColor: feature.bgColor,
                borderRadius: "20px",
                textAlign: "left",
                padding: "20px",
                minHeight: "280px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  style={{ width: "80px", marginRight: "20px" }}
                />
                <h3 style={{ fontSize: "24px", fontWeight: "600" }}>
                  {feature.title}
                </h3>
              </div>
              <p style={{ fontSize: "16px", color: "#555" }}>
                {feature.description}
              </p>
              <a
                href="#"
                style={{
                  color: "#007BFF",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Learn more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
