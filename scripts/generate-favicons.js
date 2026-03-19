const fs = require("fs/promises");
const path = require("path");
const favicons = require("favicons");

async function copyIfExists(sourcePath, destinationPath) {
  try {
    await fs.copyFile(sourcePath, destinationPath);
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }
}

async function main() {
  const rootDir = path.resolve(__dirname, "..");
  const publicDir = path.join(rootDir, "public");
  const source = path.join(publicDir, "favicon.svg");

  const configuration = {
    path: "/",
    appName: "Mohd Ammar Portfolio",
    appShortName: "Ammar",
    appDescription:
      "Portfolio of Mohd Ammar, full-stack software engineer specializing in React, NestJS, TypeScript, and AWS.",
    developerName: "Mohd Ammar",
    background: "#f8fcff",
    theme_color: "#0f766e",
    display: "standalone",
    orientation: "any",
    start_url: "/",
    version: "1.0",
    logging: false,
    icons: {
      android: true,
      appleIcon: true,
      favicons: true,
      appleStartup: false,
      coast: false,
      firefox: false,
      windows: false,
      yandex: false,
    },
  };

  const response = await favicons(source, configuration);

  await Promise.all(
    response.images.map((image) =>
      fs.writeFile(path.join(publicDir, image.name), image.contents)
    )
  );

  for (const file of response.files) {
    if (file.name === "manifest.webmanifest") {
      await fs.writeFile(path.join(publicDir, "site.webmanifest"), file.contents);
    }
  }

  await copyIfExists(
    path.join(publicDir, "android-chrome-192x192.png"),
    path.join(publicDir, "logo192.png")
  );

  await copyIfExists(
    path.join(publicDir, "android-chrome-512x512.png"),
    path.join(publicDir, "logo512.png")
  );

  const generatedImageNames = response.images.map((image) => image.name);
  console.log("Generated image assets:");
  for (const name of generatedImageNames) {
    console.log(`- ${name}`);
  }

  console.log("Generated text assets:");
  for (const file of response.files) {
    console.log(`- ${file.name}`);
  }

  console.log("Favicon generation completed.");
}

main().catch((error) => {
  console.error("Failed to generate favicons:");
  console.error(error);
  process.exit(1);
});
