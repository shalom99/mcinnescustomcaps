"use client";
import { FC } from "react";
import { InstagramEmbed } from "react-social-media-embed";

type IgPostsProps = {};

const IgPosts: FC<IgPostsProps> = ({}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 py-10">
      <InstagramEmbed
      
        url="https://www.instagram.com/p/C0Qda0Qr5zE/?img_index=1"
        width={328}
      />
         <InstagramEmbed
        url="https://www.instagram.com/p/C0LBXOZPCwE/?img_index=1"
        width={328}
      />
         <InstagramEmbed
        url="https://www.instagram.com/p/C0IuanQrHjL/?img_index=1"
        width={328}
      />
         <InstagramEmbed
        url="https://www.instagram.com/p/Cz-tpzGrXqa/?img_index=1"
        width={328}
      />
         <InstagramEmbed
        url="https://www.instagram.com/p/Cz8ZsFIrL2M/?img_index=1"
        width={328}
      />
         <InstagramEmbed
        url="https://www.instagram.com/p/Cz3LhEyrlZO/?img_index=1"
        width={328}
      />
         <InstagramEmbed
        url="https://www.instagram.com/p/Cz0yqo6rJdh/?img_index=1"
        width={328}
      />
         <InstagramEmbed
        url="https://www.instagram.com/p/Czpjp-Ovmf_/?img_index=1"
        width={328}
      />
         <InstagramEmbed
        url="https://www.instagram.com/p/Cxor362vvH_/?img_index=1"
        width={328}
      />

    </div>
  );
};

export default IgPosts;
