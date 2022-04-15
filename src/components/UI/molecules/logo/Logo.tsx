import './Logo.css'

import { CheckCircleOutlined} from '@ant-design/icons';

const Logo = () => {
  return (
    <span className="logo"><i><sup>{<CheckCircleOutlined />}</sup>EzPoll</i></span>
  )
}

export default Logo