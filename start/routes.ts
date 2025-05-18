/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import MembersController from "#controllers/members_controller";

router.get('/', async () => {
  return {
    hello: 'world',
  }
})



router.post('/member-benefits',[MembersController,'getMemberBenefits'])

router.post('/member-information',[MembersController,'getMemberInformation'])
