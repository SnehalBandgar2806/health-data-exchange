import { HttpAgent, Actor } from '@dfinity/agent';
import { idlFactory } from '../../../declarations/health-data-exchange-backend';

const canisterId = import.meta.env.VITE_CANISTER_ID_HEALTH_DATA_EXCHANGE_BACKEND;

const agent = new HttpAgent();

const icp_health_backend = Actor.createActor(idlFactory, {
  agent,
  canisterId,
});

export default health-data-exchange-backend;