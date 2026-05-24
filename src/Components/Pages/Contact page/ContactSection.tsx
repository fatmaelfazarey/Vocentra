import ContactForm from './ContactForm'
import SectionTitle from '../../MY-UI/SectionTitle'
import IconText from '../../MY-UI/IconText'
import { CiMail, CiMobile1 } from 'react-icons/ci';
import { socialMedia } from '../../../Data';
import SectionContainer from '../../shared/SectionContainer';

const ContactSection = () => {
  return (
    <SectionContainer bgColor={'secondary'}>
      <div className='flex  flex-col md:flex-row flex-wrap gap-2.5 justify-between'>
        <div className='flex gap-4 flex-col '>
          <SectionTitle label='Contact Us' line={true} />
          <IconText
            icon={CiMobile1}
            label="vocentraofficial@gmail.com"
            navigateTo="mailto:vocentraofficial@gmail.com"
            textColor={'text'}
          />
          <IconText
            icon={CiMail}
            label="+201234567890"
            navigateTo="tel:+201234567890"
            textColor={'text'}
          />
          {socialMedia.map((item, index) => (
            <IconText
              key={index}
              icon={item.icon}
              label={item.label}
              navigateTo={item.link}
              textColor={'text'}
            />
          ))}
        </div>
        <ContactForm />
      </div>
    </SectionContainer>
  )
}

export default ContactSection
