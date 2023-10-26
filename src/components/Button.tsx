/* /components/Button.tsx  */

type ButtonType = "button" | "submit" | undefined;
interface Props {
  children: React.ReactNode;
  handleClick?: () => void;
  styles: string;
  type?: ButtonType;
  disabled?: boolean;
}

const Button = (props: Props) => {
  return (
    <button
      onClick={props?.handleClick}
      className={`${props.styles} rounded-full bg-[#121212] font-drafting text-neutral-200 hover:scale-110 px-5 py-2`}
      type={props?.type}
      disabled={props?.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
