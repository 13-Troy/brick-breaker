import { Theme, ITheme } from '../../server/models/theme';

class ThemeController {
  create(body:any) {
    const {userId, baseTheme } = body
    return Theme.create({ userId, baseTheme});
  }

  update(userId: number, data: ITheme) {
    return Theme.update(data, { where: { userId } });
  }

  getById(userId: number) {
    return Theme.findOne({ where: { userId} });
  }

}

export default new ThemeController()
