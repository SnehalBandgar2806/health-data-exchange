use std::collections::HashMap;
use std::cell::RefCell;
use candid::Principal;
use crate::models::{User, UploadBlock, DataRequest, ResearchStudy};

thread_local! {
    pub static USERS: RefCell<HashMap<Principal, User>> = RefCell::new(HashMap::new());
    pub static UPLOAD_CHAINS: RefCell<HashMap<Principal, Vec<UploadBlock>>> = RefCell::new(HashMap::new());
    pub static DATA_REQUESTS: RefCell<Vec<DataRequest>> = RefCell::new(Vec::new());
    pub static RESEARCH_STUDIES: RefCell<HashMap<Principal, Vec<ResearchStudy>>> = RefCell::new(HashMap::new());
}
