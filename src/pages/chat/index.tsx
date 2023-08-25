import classNames from 'classnames/bind';
const cx = classNames.bind(require('./style/Chat.module.scss'));
const Chat = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('row no-gutters')}>
        <div className={cx('col-md-4 border-right')}>
          <div className={cx('settings-tray')}>
            <img
              className={cx('profile-image')}
              src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/filip.jpg"
              alt="Profile img"
            />
            <span className={cx('settings-tray--right')}>
              <i className={cx('material-icons')}>cached</i>
              <i className={cx('material-icons')}>message</i>
              <i className={cx('material-icons')}>menu</i>
            </span>
          </div>
          <div className={cx('search-box')}>
            <div className={cx('input-wrapper')}>
              <i className={cx('material-icons')}>search</i>
              <input
                className={cx('chat-input')}
                placeholder="Search here"
                type="text"
              />
            </div>
          </div>
          <div className={cx('friend-drawer friend-drawer--onhover')}>
            <img
              className={cx('profile-image')}
              src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/robocop.jpg"
              alt=""
            />
            <div className={cx('text')}>
              <h6>Robo Cop</h6>
              <p className={cx('text-muted')}>Hey, you're arrested!</p>
            </div>
            <span className={cx('time text-muted small')}>13:21</span>
          </div>
          <hr className={cx('chat-hr')} />
          <div className={cx('friend-drawer friend-drawer--onhover')}>
            <img
              className={cx('profile-image')}
              src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/optimus-prime.jpeg"
              alt=""
            />
            <div className={cx('text')}>
              <h6>Optimus</h6>
              <p className={cx('text-muted')}>Wanna grab a beer?</p>
            </div>
            <span className={cx('time text-muted small')}>00:32</span>
          </div>
          <hr className={cx('chat-hr')} />
          <div className={cx('friend-drawer friend-drawer--onhover')}>
            <img
              className={cx('profile-image')}
              src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/real-terminator.png"
              alt=""
            />
            <div className={cx('text')}>
              <h6>Skynet</h6>
              <p className={cx('text-muted')}>Seen that canned piece of s?</p>
            </div>
            <span className={cx('time text-muted small')}>13:21</span>
          </div>
          <hr className={cx('chat-hr')} />
          <div className={cx('friend-drawer friend-drawer--onhover')}>
            <img
              className={cx('profile-image')}
              src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/termy.jpg"
              alt=""
            />
            <div className={cx('text')}>
              <h6>Termy</h6>
              <p className={cx('text-muted')}>Im studying spanish...</p>
            </div>
            <span className={cx('time text-muted small')}>13:21</span>
          </div>
          <hr className={cx('chat-hr')} />
          <div className={cx('friend-drawer friend-drawer--onhover')}>
            <img
              className={cx('profile-image')}
              src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/rick.jpg"
              alt=""
            />
            <div className={cx('text')}>
              <h6>Richard</h6>
              <p className={cx('text-muted')}>I'm not sure...</p>
            </div>
            <span className={cx('time text-muted small')}>13:21</span>
          </div>
          <hr className={cx('chat-hr')} />
          <div className={cx('friend-drawer friend-drawer--onhover')}>
            <img
              className={cx('profile-image')}
              src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/rachel.jpeg"
              alt=""
            />
            <div className={cx('text')}>
              <h6>XXXXX</h6>
              <p className={cx('text-muted')}>Hi, wanna see something?</p>
            </div>
            <span className={cx('time text-muted small')}>13:21</span>
          </div>
        </div>
        <div className={cx('col-md-8')}>
          <div className={cx('settings-tray')}>
            <div className={cx('friend-drawer no-gutters friend-drawer--grey')}>
              <img
                className={cx('profile-image')}
                src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/robocop.jpg"
                alt=""
              />
              <div className={cx('text')}>
                <h6>Robo Cop</h6>
                <p className={cx('text-muted')}>
                  Layin' down the law since like before Christ...
                </p>
              </div>
              <span className={cx('settings-tray--right')}>
                <i className={cx('material-icons')}>cached</i>
                <i className={cx('material-icons')}>message</i>
                <i className={cx('material-icons')}>menu</i>
              </span>
            </div>
          </div>
          <div className={cx('chat-panel')}>
            <div className={cx('row no-gutters')}>
              <div className={cx('col-md-3')}>
                <div className={cx('chat-bubble chat-bubble--left')}>
                  Hello dude!
                </div>
              </div>
            </div>
            <div className={cx('row no-gutters')}>
              <div className={cx('col-md-3 offset-md-9')}>
                <div className={cx('chat-bubble chat-bubble--right')}>
                  Hello dude!
                </div>
              </div>
            </div>
            <div className={cx('row no-gutters')}>
              <div className={cx('col-md-3 offset-md-9')}>
                <div className={cx('chat-bubble chat-bubble--right')}>
                  Hello dude!
                </div>
              </div>
            </div>
            <div className={cx('row no-gutters')}>
              <div className={cx('col-md-3')}>
                <div className={cx('chat-bubble chat-bubble--left')}>
                  Hello dude!
                </div>
              </div>
            </div>
            <div className={cx('row no-gutters')}>
              <div className={cx('col-md-3')}>
                <div className={cx('chat-bubble chat-bubble--left')}>
                  Hello dude!
                </div>
              </div>
            </div>
            <div className={cx('row no-gutters')}>
              <div className={cx('col-md-3')}>
                <div className={cx('chat-bubble chat-bubble--left')}>
                  Hello dude!
                </div>
              </div>
            </div>
            <div className={cx('row no-gutters')}>
              <div className={cx('col-md-3 offset-md-9')}>
                <div className={cx('chat-bubble chat-bubble--right')}>
                  Hello dude!
                </div>
              </div>
            </div>
            <div className={cx('row')}>
              <div className={cx('col-12')}>
                <div className={cx('chat-box-tray')}>
                  <i className={cx('material-icons')}>
                    sentiment_very_satisfied
                  </i>
                  <input
                    className={cx('chat-input')}
                    type="text"
                    placeholder="Type your message here..."
                  />
                  <i className={cx('material-icons')}>mic</i>
                  <i className={cx('material-icons')}>send</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
