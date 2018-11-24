import React, { Component } from 'react';

class PortList extends Component {
  state = {
    list : [
      {title : '남양우유', info :'반응형', part : '80%', link : 'http://www.옳은.com', time:'17.08.02 - 17.08.20', id : 0},
      {title : '스쿠바프로(해성)', info :'반응형', part : '100%', link : 'http://www.scubapro.co.kr', time:'17.12.13 - 18.01.23', id : 1},
      {title : '한국국제교류재단', info :'반응형, 웹접근성준수', part : '100%', link : 'http://newsletter.ach.or.kr', time:'17.07.19 - 17.08.29', id : 2},
      {title : '비젠소프트', info :'반응형', part : '100%', link : 'http://www.vizensoft.com/', time:'17.07.01 - 17.11.06', id : 3},
      {title : '비젠메디컬', info :'반응형', part : '100%', link : 'http://www.vizenmedical.com/', time:'17.08.14 - 17.09.30', id : 4},
      {title : '선거송코리아', info :'반응형', part : '100%', link : 'http://victory613.net/', time:'17.12.28 - 18.01.30', id : 5},
      {title : '키움페이', info :'반응형', part : '40%', link : 'https://www.kiwoompay.co.kr/', time:'17.06.27 - 17.08.01', id : 6},
      {title : 'move360', info :'모바일 홈페이지', part : '100%', link : 'http://www.move360.co.kr', time:'17.10.26 - 17.11.14', id : 7},
      {title : '싸이로드', info :'웹/모바일 홈페이지', part : '100%', link : 'http://cylod.com', link2:'http://cylod.com/m', time:'17.02.08 - 17.06.15', id : 8},
      {title : '수펜션', info :'반응형', part : '100%', link : 'http://soopension.com', time:'17.06.19 - 17.06.29', id : 9},
      {title : '비젠인트라넷', info :'인트라넷 모듈', part : '90%', link : 'http://intranet.vizensoft.com/intranet/', time:'17.07.30 - 17.10.20', id : 10},
      {title : '젬백스앤카엘', info :'반응형(국문/영문/중문)', part : '50%', link : 'http://www.gemvax.com/', time:'17.01.03 - 17.03.06', id : 11},
      {title : '파인텍', info :'반응형', part : '30%', link : 'http://www.ifinetek.com/', time:'18.01.11 - 18.01.18', id : 12},
      {title : '성동돌봄센터', info :'반응형', part : '100%', link : 'http://ansim114.net/', time:'17.10.16 - 17.12.01', id : 13},
      {title : '운형', info :'반응형', part : '100%', link : 'http://www.woonhyung.co.kr', time:'17.11.03 - 17.12.08', id : 14},
      {title : '인터로조', info :'반응형(국문/영문)', part : '100%', link : 'http://interojo.com', time:'17.05.19 - 17.07.20', id : 15},
      {title : '한빛산업', info :'반응형(국문/영문)', part : '70%', link : 'http://www.hanvit-ind.com', time:'17.11.07 - 17.12.15', id : 16},
      {title : '메디프렌드', info :'반응형', part : '90%', link : 'http://medifriend.co.kr', time:'17.05.02 - 17.06.30', id : 17},
      {title : '위즈앤미의원', info :'모바일 홈페이지', part : '100%', link : 'http://wiznmi.com/m/', time:'17.04.04 - 17.04.10', id : 18},
      {title : '펜타시스템', info :'웹/모바일 홈페이지', part : '100%', link : 'http://www.penta.co.kr/', link2 : 'http://m.penta.co.kr/', time:'16.12.01 - 17.01.11', id : 19},
      {title : '비젠호스팅', info :'웹/모바일 홈페이지', part : '100%', link : 'http://www.vizenhosting.com',link2 :'http://m.vizenhosting.com', time:'17.01.09 - 17.04.21', id : 20},
      {title : '세무지원닷컴', info :'웹/모바일 홈페이지', part : '100%', link : 'http://www.taxreturncompany.com',link2 :'http://m.taxreturncompany.com', time:'17.04.21 - 17.06.14', id : 21},
      {title : '고양시정신건강증진센터', info :'모바일 홈페이지', part : '100%', link : 'http://m.goyangmaum.org/', time:'17.01.18 - 17.04.12', id : 22},
      {title : '삼진비티', info :'웹 홈페이지', part : '100%', link : 'http://samjinbt.com', time:'16.12.05 - 17.01.24', id :23},
      {title : '밸류플러스', info :'웹 홈페이지', part : '40%', link : 'http://www.thevalueplus.com', time:'17.11.17 - 17.11.20', id : 25},
      {title : '공공통번역협회', info :'웹 홈페이지', part : '40%', link : 'http://www.kapti.or.kr', time:'17.01.24 - 17.01.30', id : 26},
    ]
  }
  render() {
    return (
      <div className='por_list'>
      <p className='cou'> * 시간산정은 해당 프로젝트에 참여한 날짜를 기준으로 하였으므로, 절대적인 시간은 아닙니다</p>
      <p className='cou'> * 시간이 지남에 따라 제가 작업한 내용에서 변화가 있을 수 있습니다. ( 최대한 제외 하고 있습니다 )</p>
        <table>
          <thead>
            <tr>
              <th>프로젝트명</th>
              <th>정보</th>
              <th>참여도</th>
              <th>시간</th>
              <th>사이트</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.list[0].title}</td>
              <td>{this.state.list[0].info}</td>
              <td>{this.state.list[0].part}</td>
              <td>{this.state.list[0].time}</td>
              <td><a href={this.state.list[0].link} rel='noopener' target='_blank' >CLICK</a></td>
            </tr>
            <tr>
              <td>{this.state.list[1].title}</td>
              <td>{this.state.list[1].info}</td>
              <td>{this.state.list[1].part}</td>
              <td>{this.state.list[1].time}</td>
              <td><a href={this.state.list[1].link} rel='noopener' target='_blank' >CLICK</a></td>
            </tr>
            <tr>
              <td>{this.state.list[2].title}</td>
              <td>{this.state.list[2].info}</td>
              <td>{this.state.list[2].part}</td>
              <td>{this.state.list[2].time}</td>
              <td><a href={this.state.list[2].link} rel='noopener' target='_blank' >CLICK</a></td>
            </tr>
            <tr>
              <td>{this.state.list[3].title}</td>
              <td>{this.state.list[3].info}</td>
              <td>{this.state.list[3].part}</td>
              <td>{this.state.list[3].time}</td>
              <td><a href={this.state.list[3].link} rel='noopener' target='_blank' >CLICK</a></td>
            </tr>
            <tr>
              <td>{this.state.list[4].title}</td>
              <td>{this.state.list[4].info}</td>
              <td>{this.state.list[4].part}</td>
              <td>{this.state.list[4].time}</td>
              <td><a href={this.state.list[4].link} rel='noopener' target='_blank' >CLICK</a></td>
            </tr>
            <tr>
              <td>{this.state.list[5].title}</td>
              <td>{this.state.list[5].info}</td>
              <td>{this.state.list[5].part}</td>
              <td>{this.state.list[5].time}</td>
              <td><a href={this.state.list[5].link} rel='noopener' target='_blank' >CLICK</a></td>
            </tr>
            <tr>
              <td>{this.state.list[6].title}</td>
              <td>{this.state.list[6].info}</td>
              <td>{this.state.list[6].part}</td>
              <td>{this.state.list[6].time}</td>
              <td><a href={this.state.list[6].link} rel='noopener' target='_blank' >CLICK</a></td>
            </tr>
            <tr>
              <td>{this.state.list[7].title}</td>
              <td>{this.state.list[7].info}</td>
              <td>{this.state.list[7].part}</td>
              <td>{this.state.list[7].time}</td>
              <td><a href={this.state.list[7].link} rel='noopener' target='_blank' >CLICK</a></td>
            </tr>
            <tr>
              <td>{this.state.list[8].title}</td>
              <td>{this.state.list[8].info}</td>
              <td>{this.state.list[8].part}</td>
              <td>{this.state.list[8].time}</td>
              <td><a href={this.state.list[8].link} rel='noopener' target='_blank' >PC SITE</a><br /><a href={this.state.list[8].link2} rel='noopener' target='_blank' >MOBILE</a></td>
            </tr>
            <tr>
              <td>{this.state.list[9].title}</td>
              <td>{this.state.list[9].info}</td>
              <td>{this.state.list[9].part}</td>
              <td>{this.state.list[9].time}</td>
              <td><a href={this.state.list[9].link} rel='noopener' target='_blank' >CLICK</a></td>
            </tr>
            <tr>
              <td>{this.state.list[10].title}</td>
              <td>{this.state.list[10].info}</td>
              <td>{this.state.list[10].part}</td>
              <td>{this.state.list[10].time}</td>
              <td><a href={this.state.list[10].link} rel='noopener' target='_blank' >CLICK</a></td>
            </tr>
            <tr>
              <td>{this.state.list[11].title}</td>
              <td>{this.state.list[11].info}</td>
              <td>{this.state.list[11].part}</td>
              <td>{this.state.list[11].time}</td>
              <td><a href={this.state.list[11].link} rel='noopener' target='_blank' >CLICK</a></td>
            </tr>
            <tr>
              <td>{this.state.list[12].title}</td>
              <td>{this.state.list[12].info}</td>
              <td>{this.state.list[12].part}</td>
              <td>{this.state.list[12].time}</td>
              <td><a href={this.state.list[12].link} rel='noopener' target='_blank' >CLICK</a></td>
            </tr>
            <tr>
              <td>{this.state.list[13].title}</td>
              <td>{this.state.list[13].info}</td>
              <td>{this.state.list[13].part}</td>
              <td>{this.state.list[13].time}</td>
              <td><a href={this.state.list[13].link} rel='noopener' target='_blank' >CLICK</a></td>
            </tr>
            <tr>
              <td>{this.state.list[14].title}</td>
              <td>{this.state.list[14].info}</td>
              <td>{this.state.list[14].part}</td>
              <td>{this.state.list[14].time}</td>
              <td><a href={this.state.list[14].link} rel='noopener' target='_blank' >CLICK</a></td>
            </tr>
            <tr>
              <td>{this.state.list[15].title}</td>
              <td>{this.state.list[15].info}</td>
              <td>{this.state.list[15].part}</td>
              <td>{this.state.list[15].time}</td>
              <td><a href={this.state.list[15].link} rel='noopener' target='_blank' >CLICK</a></td>
            </tr>
            <tr>
              <td>{this.state.list[16].title}</td>
              <td>{this.state.list[16].info}</td>
              <td>{this.state.list[16].part}</td>
              <td>{this.state.list[16].time}</td>
              <td><a href={this.state.list[16].link} rel='noopener' target='_blank' >CLICK</a></td>
            </tr>
            <tr>
              <td>{this.state.list[17].title}</td>
              <td>{this.state.list[17].info}</td>
              <td>{this.state.list[17].part}</td>
              <td>{this.state.list[17].time}</td>
              <td><a href={this.state.list[17].link} rel='noopener' target='_blank' >CLICK</a></td>
            </tr>
            <tr>
              <td>{this.state.list[18].title}</td>
              <td>{this.state.list[18].info}</td>
              <td>{this.state.list[18].part}</td>
              <td>{this.state.list[18].time}</td>
              <td><a href={this.state.list[18].link} rel='noopener' target='_blank' >CLICK</a></td>
            </tr>
            <tr>
              <td>{this.state.list[19].title}</td>
              <td>{this.state.list[19].info}</td>
              <td>{this.state.list[19].part}</td>
              <td>{this.state.list[19].time}</td>
              <td><a href={this.state.list[19].link} rel='noopener' target='_blank' >PC SITE</a><br /><a href={this.state.list[19].link2} rel='noopener' target='_blank' >MOBILE</a></td>
            </tr>
            <tr>
              <td>{this.state.list[20].title}</td>
              <td>{this.state.list[20].info}</td>
              <td>{this.state.list[20].part}</td>
              <td>{this.state.list[20].time}</td>
              <td><a href={this.state.list[20].link} rel='noopener' target='_blank' >PC SITE</a><br /><a href={this.state.list[20].link2} rel='noopener' target='_blank' >MOBILE</a></td>
            </tr>
            <tr>
              <td>{this.state.list[21].title}</td>
              <td>{this.state.list[21].info}</td>
              <td>{this.state.list[21].part}</td>
              <td>{this.state.list[21].time}</td>
              <td><a href={this.state.list[21].link} rel='noopener' target='_blank' >PC SITE</a><br /><a href={this.state.list[21].link2} rel='noopener' target='_blank' >MOBILE</a></td>
            </tr>
            <tr>
              <td>{this.state.list[22].title}</td>
              <td>{this.state.list[22].info}</td>
              <td>{this.state.list[22].part}</td>
              <td>{this.state.list[22].time}</td>
              <td><a href={this.state.list[22].link} rel='noopener' target='_blank' >CLICK</a></td>
            </tr>
            <tr>
              <td>{this.state.list[23].title}</td>
              <td>{this.state.list[23].info}</td>
              <td>{this.state.list[23].part}</td>
              <td>{this.state.list[23].time}</td>
              <td><a href={this.state.list[23].link} rel='noopener' target='_blank' >CLICK</a></td>
            </tr>
            <tr>
              <td>{this.state.list[24].title}</td>
              <td>{this.state.list[24].info}</td>
              <td>{this.state.list[24].part}</td>
              <td>{this.state.list[24].time}</td>
              <td><a href={this.state.list[24].link} rel='noopener' target='_blank' >CLICK</a></td>
            </tr>
            <tr>
              <td>{this.state.list[25].title}</td>
              <td>{this.state.list[25].info}</td>
              <td>{this.state.list[25].part}</td>
              <td>{this.state.list[25].time}</td>
              <td><a href={this.state.list[25].link} rel='noopener' target='_blank' >CLICK</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

}

export default PortList;
