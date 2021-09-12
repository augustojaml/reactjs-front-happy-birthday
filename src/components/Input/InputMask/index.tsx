import { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { FiInfo } from 'react-icons/fi';
import MaskedInput from 'react-maskedinput';
import { Container } from '../styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  message?: string;
  icon?: React.ComponentType<IconBaseProps>;
  mask?: string;
}

export function InputMask({
  message,
  icon: Icon,
  mask = '1111',
  ...rest
}: InputProps) {
  return (
    <>
      <Container>
        <div className='content'>
          <div className='icon'>
            {Icon ? <Icon /> : <BsQuestionCircleFill />}
          </div>
          <MaskedInput mask={mask} placeholderChar=' ' {...rest} />
        </div>
        <div className='message'>
          {message !== undefined && (
            <>
              <FiInfo />
              <span>{message}</span>
            </>
          )}
        </div>
      </Container>
    </>
  );
}
