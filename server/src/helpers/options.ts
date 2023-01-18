const options: any = {
  format: "A4",
  orientation: "portrait",
  border: {
    top: "0.5in",
    right: "0.5in",
    bottom: "0.5in",
    left: "0.5in",
  },
  header: {
    height: "0.5in",
    contents: "<div style='text-align: center; font-size: 10px; font-weight: bold;'>{{page}}</div>",
  },
  footer: {
    height: "0.5in",
    contents: "<div style='text-align: center; font-size: 10px; font-weight: bold;'>{{page}}</div>",
    position: "bottom",
  },
};

export default options;
