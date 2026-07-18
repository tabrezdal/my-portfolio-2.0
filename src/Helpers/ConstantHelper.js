const ConstantHelper = {
  CTACall: "tel:+1 (217) 339-9455",
  CTAChat:
    "https://api.whatsapp.com/send/?phone=+12173399455&text=Hi+Tabrez,+I+came+across+your+portfolio+and+would+love+to+connect.",

  RefundRequestWhatsppMessage:
    "https://api.whatsapp.com/send/?phone=+12173399455&text=Hi+Tabrez,+I+want+to+raise+the+refund+request.",

  shareOnPinterestUrl: "https://www.pinterest.com/pin/create/button/?url=",
  shareOnTwitterUrl: "https://twitter.com/intent/tweet?url=",
  shareOnFacebookUrl: "https://www.facebook.com/sharer/sharer.php?u=",
  shareOnLinkedinUrl:
    "https://www.linkedin.com/shareArticle?mini=true&amp;url==",
  shareOnInstagramUrl: "https://www.instagram.com/tabrezdal/",
  copyLink: "https://www.instagram.com/tabrezdal/",

  TestimonialSectionTitle: "What my clients says",
  WriteReviewButton: "Write your review",
  goolgeReviewUrl: "https://g.page/r/CU2hmjyiPOGXEBM/review",

  // URL builders for internal routes with trailing slash
  buildCaseStudiesUrl: () => "/case-studies/",
  buildCaseStudyUrl: (slug) => `/case-study/${slug}/`,
  buildUiUxProjectUrl: (id) => `/ui-ux-project/${id}/`,
  buildAbsoluteCaseStudiesUrl: () => "https://tabrezdal.com/case-studies/",
  buildAbsoluteCaseStudyUrl: (slug) => `https://tabrezdal.com/case-study/${slug}/`,
  buildAbsoluteUiUxProjectUrl: (id) => `https://tabrezdal.com/ui-ux-project/${id}/`,
};

export default ConstantHelper;
