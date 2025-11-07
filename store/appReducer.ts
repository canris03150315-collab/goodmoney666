import type { SiteConfig, LotterySet, Category, User, Order, Transaction, Prize, TicketLock, QueueEntry, Banner, PrizeInstance, Shipment, ShippingAddress, PickupRequest, AppState, AdminModalMode } from '../types';
import { mockSiteConfig, mockCategories, mockUsers } from '../data/mockData';

export const initialState: AppState = {
  adminModalMode: 'hidden',
  siteConfig: mockSiteConfig,
  categories: mockCategories,
  currentUser: null,
  users: mockUsers,
  authError: null,
  lotterySets: [],
  isLoadingSets: true,
  ticketLocks: [],
  lotteryQueues: {},
  orders: [],
  transactions: [],
  inventory: {},
  shipments: [],
  pickupRequests: [],
};

export type AppAction =
  | { type: 'SET_ADMIN_MODAL_MODE'; payload: AdminModalMode }
  | { type: 'UPDATE_SITE_CONFIG'; payload: SiteConfig }
  | { type: 'SET_CATEGORIES'; payload: Category[] }
  | { type: 'SET_CURRENT_USER'; payload: User | null }
  | { type: 'SET_AUTH_ERROR'; payload: string | null }
  | { type: 'SET_USERS'; payload: User[] }
  | { type: 'UPDATE_USER'; payload: User }
  | { type: 'SET_LOADING_SETS'; payload: boolean }
  | { type: 'SET_LOTTERY_SETS'; payload: LotterySet[] }
  | { type: 'UPDATE_TICKET_LOCKS'; payload: TicketLock[] }
  | { type: 'UPDATE_LOTTERY_QUEUES'; payload: Record<string, QueueEntry[]> }
  | { type: 'SET_ORDERS'; payload: Order[] }
  | { type: 'SET_TRANSACTIONS'; payload: Transaction[] }
  | { type: 'SET_INVENTORY'; payload: { [key: string]: PrizeInstance } }
  | { type: 'SET_SHIPMENTS'; payload: Shipment[] }
  | { type: 'SET_PICKUPREQUESTS'; payload: PickupRequest[] };


export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_ADMIN_MODAL_MODE': return { ...state, adminModalMode: action.payload };
    case 'UPDATE_SITE_CONFIG': return { ...state, siteConfig: action.payload };
    case 'SET_CATEGORIES': return { ...state, categories: action.payload };
    case 'SET_CURRENT_USER': return { ...state, currentUser: action.payload, authError: null };
    case 'SET_AUTH_ERROR': return { ...state, authError: action.payload };
    case 'SET_USERS': return { ...state, users: action.payload };
    case 'UPDATE_USER': return { ...state, users: state.users.map(u => (u.id === action.payload.id ? action.payload : u)), currentUser: state.currentUser?.id === action.payload.id ? action.payload : state.currentUser };
    case 'SET_LOADING_SETS': return { ...state, isLoadingSets: action.payload };
    case 'SET_LOTTERY_SETS': return { ...state, lotterySets: action.payload, isLoadingSets: false };
    case 'UPDATE_TICKET_LOCKS': return { ...state, ticketLocks: action.payload };
    case 'UPDATE_LOTTERY_QUEUES': return { ...state, lotteryQueues: action.payload };
    case 'SET_ORDERS': return { ...state, orders: action.payload };
    case 'SET_TRANSACTIONS': return { ...state, transactions: action.payload };
    case 'SET_INVENTORY': return { ...state, inventory: action.payload };
    case 'SET_SHIPMENTS': return { ...state, shipments: action.payload };
    case 'SET_PICKUPREQUESTS': return { ...state, pickupRequests: action.payload };
    default: return state;
  }
};
