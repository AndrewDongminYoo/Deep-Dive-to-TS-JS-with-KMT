import { Store } from "./types";
import Router from "./core/router";
import NewsFeedView from "./page/news-feed-view";
import NewsDetailView from "./page/news-detail-view";

export const store: Store = {
  currentPage: 1,
  feeds: [],
};

const router: Router = new Router();
const newsFeedView = new NewsFeedView('root');
const newsDetailView = new NewsDetailView('root');

router.setDefaultPage(newsFeedView);

router.addRouterPath('/page/', newsFeedView);
router.addRouterPath('/show/', newsDetailView);

router.route();