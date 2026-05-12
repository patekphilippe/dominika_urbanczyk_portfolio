import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

type Props = Omit<SvgIconProps, "fontSize"> & {
  size?: number;
};

export default function ArrowOutward({ size = 24, sx, ...props }: Props) {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      aria-hidden
      {...props}
      sx={{ width: size, height: size, fill: "none", ...sx }}
    >
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}
