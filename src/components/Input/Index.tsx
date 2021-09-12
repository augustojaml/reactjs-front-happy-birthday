import { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { FiInfo } from 'react-icons/fi';
import { Container } from './styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  message?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export function Input({ message, icon: Icon, ...rest }: InputProps) {
  return (
    <>
      <Container>
        <div className='content'>
          <div className='icon'>
            {Icon ? <Icon /> : <BsQuestionCircleFill />}
          </div>
          <input {...rest} />
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
