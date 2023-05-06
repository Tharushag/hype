import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import styles from "@/styles/product.module.scss";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function Share() {
  return (
    <div className={ styles['share'] }>
      <div className={`${styles['share__copy']} ${styles['share__copy--click']}`}>
        <ContentCopyIcon className={`${styles['share__copy__icon']}`} />
      </div>
      <WhatsAppIcon className={`${styles['share__icon']} text`} />
      <FacebookIcon className={`${styles['share__icon']} text`} />
      <TwitterIcon className={`${styles['share__icon']} text`} />
    </div>
  );
}

export default Share;
