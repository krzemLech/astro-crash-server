import { Cloudinary } from "@cloudinary/url-gen";
import { source } from "@cloudinary/url-gen/actions/overlay";
import { text } from "@cloudinary/url-gen/qualifiers/source";
import { TextStyle } from "@cloudinary/url-gen/qualifiers/textStyle";

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

const cloudinary = new Cloudinary({
  cloud: {
    cloudName,
  },
  url: {
    secure: true,
  },
});

const getThumbnail = (title: string) => {
  return cloudinary
    .image("rhythm-nation-bg")
    .overlay(source(text(title, new TextStyle("Cabin", 64).fontWeight("bold"))))
    .toURL();
};

export { cloudinary, getThumbnail };
