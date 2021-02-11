import Image from '../models/Image';
import 'express-async-errors';

export default {
  render (image: Image) {
    return {
      id: image.id,
      url: `http://192.168.1.104:3333/uploads/${image.path}` // Uquando mudar para o mobile trocar o localhost
      //pelo ip do celular na rede
    }
  },

  renderMany (images: Image[]) {
    return images.map(image => this.render(image))
  }
};