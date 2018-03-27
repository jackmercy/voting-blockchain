import express from 'express';
import ContractController from '../controllers/contract.controller';

const router = express.Router();

router.route('')
  .get(ContractController.connect);

router.route('/voting')
        .get(ContractController.voteCandidate);

router.route('/votingList')
        .get(ContractController.getVotingList);

router



export default router;
