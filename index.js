module.exports.alldown = (url) => 
  new Promise(async (resolve, reject) => {
    const { alldown } = require("nayan-media-downloader");

    try {
      const { data, msg } = await alldown(url);

      resolve({
        status: true,
        dev: "AKASH_VAU",
        devfb: "https://www.facebook.com/xnxx21.com",
        devwp: "https://wa.me/+8801844821578", 
        data: data || msg,
      });
    } catch (error) {
      reject({ 
        status: false, 
        error: error.message || "An unexpected error occurred" 
      });
    }
  });
