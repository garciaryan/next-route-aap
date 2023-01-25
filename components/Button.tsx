import styles from '../styles/components/Button.module.css';
import Image from 'next/image';

interface Props {
  children: string;
  disabled?: boolean;
  color?: string;
  customBgColor?: string;
  customHoverColor?: string;
  photo?: string;
  icon?: string;
  onClickHandler: () => void;
  size?: string;
}

export default function Button({
    children,
    disabled = false,
    color = 'Blue',
    customBgColor,
    customHoverColor,
    photo,
    icon,
    onClickHandler,
    size = 'large'
  }: Props) {

  return (
    <button
      className={`
        focus:outline-none flex items-center justify-center relative ${styles.button} ${styles[color]}
        ${size === 'large' ? styles.buttonLarge : styles.buttonSmall}
        ${'custom' === color ? `bg-${customBgColor} hover:bg-${customHoverColor}`: ''}
      `}
      disabled={disabled}
      onClick={onClickHandler}>
      {photo ?
        <Image
          src={photo}
          alt="Pet photo"
          className={`absolute top-0 left-0 rounded-r-none rounded-l-md ${styles.photo}`} /> : ''
      }
      {icon ?
        <Image
          src={icon}
          alt="Icon image"
          className={`mr-15 ${styles.icon}`} /> : ''
      }
      <span className={styles.buttonWhite}>{children}</span>
    </button>
  )
}
