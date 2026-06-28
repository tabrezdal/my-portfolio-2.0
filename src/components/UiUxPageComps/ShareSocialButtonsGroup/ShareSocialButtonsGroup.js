import React from "react";
import ConstantHelper from "../../../Helpers/ConstantHelper";
import ShareSocialButton from "../../../sharedComponents/ShareSocialButton/ShareSocialButton";

const ShareSocialButtonsGroup = ({ url }) => {
  const pinterestLink = ConstantHelper.shareOnPinterestUrl + `${url}`;
  const twitterLink = ConstantHelper.shareOnTwitterUrl + `${url}`;
  const facebookLink = ConstantHelper.shareOnFacebookUrl + `${url}`;
  const instagramLink = ConstantHelper.shareOnInstagramUrl + `${url}`;
  const LinkedinLink = ConstantHelper.shareOnLinkedinUrl + `${url}`;

  return (
    <div className="mb-4">
      <p className="mb-2" className="side-section-titles">Share with</p>
      <div className="d-flex gap-2 flex-wrap">
        <ShareSocialButton
          url={pinterestLink}
          icon="pinterest"
          platform="Pin"
        />
        <ShareSocialButton url={twitterLink} icon="twitter" platform="Tweet" />
        <ShareSocialButton
          url={facebookLink}
          icon="facebook"
          platform="Facebook"
        />
        <ShareSocialButton
          url={instagramLink}
          icon="instagram"
          platform="instagram"
        />
        <ShareSocialButton
          url={LinkedinLink}
          icon="linkedin"
          platform="Linkedin"
        />
        <ShareSocialButton url={url} icon="link" platform="copy" />
      </div>
    </div>
  );
};

export default ShareSocialButtonsGroup;
