import { SelectHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { FiInfo } from 'react-icons/fi';
import { Container } from '../styled';

interface SelectProps {
  key: string;
  value: string;
}

interface InputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  message?: string;
  icon?: React.ComponentType<IconBaseProps>;
  selecteds: SelectProps[];
}

export function InputSelect({
  message,
  icon: Icon,
  selecteds,
  ...rest
}: InputProps) {
  return (
    <>
      <Container>
        <div className='content'>
          <div className='icon'>
            {Icon ? <Icon /> : <BsQuestionCircleFill />}
          </div>
          <select {...rest}>
            <option value=''>Como nos conheceu</option>
            {selecteds.map((select) => (
              <option key={select.key} value={select.key}>
                {select.value}
              </option>
            ))}
          </select>
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
