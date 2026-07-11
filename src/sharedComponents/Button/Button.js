import React from "react";
import "./Button.css";

/**
 * Universal Button
 *
 * variant: 'filled' | 'outlined'
 * theme:   'dark' (black — light bg) | 'light' (white — dark bg) | 'brand' (blue — CS pages only)
 * size:    'sm' (36px) | 'md' (44px, default) | 'lg' (52px)
 */
const Button = ({
  // Content
  label,
  icon,
  iconPosition = "after",
  iconOnly = false,
  // Style
  variant = "filled",
  theme = "dark",
  size = "md",
  fullWidth = false,
  // Behaviour
  href,
  target,
  onClick,
  disabled = false,
  type = "button",
  // Extras
  className = "",
  "aria-label": ariaLabel,
  ...rest
}) => {
  const cls = [
    "btn",
    `btn--${variant}`,
    `btn--${theme}`,
    `btn--${size}`,
    fullWidth && "btn--full",
    iconOnly && "btn--icon-only",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const resolvedAriaLabel = ariaLabel || (iconOnly ? label : undefined);

  const IconEl = icon ? (
    <span className="btn__icon" aria-hidden="true">
      {typeof icon === "string" ? <i className={icon} /> : icon}
    </span>
  ) : null;

  const content = iconOnly ? (
    IconEl
  ) : (
    <>
      {icon && iconPosition === "before" && IconEl}
      {label && <span className="btn__label">{label}</span>}
      {icon && iconPosition === "after" && IconEl}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={cls}
        aria-label={resolvedAriaLabel}
        aria-disabled={disabled || undefined}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={cls}
      disabled={disabled}
      onClick={onClick}
      aria-label={resolvedAriaLabel}
      {...rest}
    >
      {content}
    </button>
  );
};

export default Button;
