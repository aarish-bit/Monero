import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './Products.scss'

class ItemPagination extends React.Component {
  constructor(props) {
      super(props);
      this.state = { 
          pager: {},
          pageSize: 20,
          size: 20
        };
        this.onChangePage = this.onChangePage.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

   onChangePage(pageSize) {
      this.setState ({pageSize: pageSize})
    } 
   
    handleChange(event){
      console.log(event.target.value)
      const {name, value } = event.target;

      var items = this.props.items;
      var pager = this.state.pager;

      console.log("name",value,this.state.pager)
    //   this.setState ({[name]: value ,pageSize: parseInt(value)},() => this.getPager(items.length, 1))
      
      pager = this.getPager(items.length, 1,parseInt(value))
      var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

      // update state
      this.setState({ pager: pager, [name]: value ,pageSize: parseInt(value) });

      // call change page function in parent component
      this.props.onChangePage(pageOfItems);
    
   
    }
    

  componentWillMount() {
      // set page if items array isn't empty
      if (this.props.items && this.props.items.length) {
          this.setPage(this.props.initialPage);
      }
    }
//    componentDidMount(name, value) {
//     this.setState ({[name]: value ,pageSize: parseInt(value)})  
//    } 

   componentDidUpdate(prevProps, prevState) {
      // reset page if items array has changed
      if (this.props.items !== prevProps.items) {
          this.setPage(this.props.initialPage);
        }
    }

   setPage(page) { 
      var items = this.props.items;
      var pager = this.state.pager;
      console.log('setPage',this.state.pager)

      if (page < 1 || page > pager.totalPages) {
          return;
        }

      // get new pager object for specified page
      pager = this.getPager(items.length, page);

      // get new page of items from items array
      var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

      // update state
      this.setState({ pager: pager });

      // call change page function in parent component
      this.props.onChangePage(pageOfItems);
    }

  getPager(totalItems, currentPage, pageSize) {
        pageSize = pageSize || this.state.pageSize;
      console.log('getPager',pageSize)
      // default to first page
      currentPage = currentPage || 1;

      // default page size is 20


      // calculate total pages
      var totalPages = Math.ceil(totalItems / this.state.pageSize);

      var startPage, endPage;
      if (totalPages <= 5) {
          // less than 10 total pages so show all
          startPage = 1;
          endPage = totalPages;
      } else {
          // more than 10 total pages so calculate start and end pages
          if (currentPage <= 3) {
              startPage = 1;
              endPage = 5;
          } else if (currentPage + 3 >= totalPages) {
              startPage = totalPages - 4;
              endPage = totalPages;
          } else {
              startPage = currentPage - 1;
              endPage = currentPage + 3;
          }
      }

      // calculate start and end item indexes
      var startIndex = (currentPage - 1) * pageSize;
      var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

      // create an array of pages to ng-repeat in the pager control
      var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

      // return object with all pager properties required by the view
      return {
          totalItems: totalItems,
          currentPage: currentPage,
          pageSize: this.state.pageSize,
          totalPages: totalPages,
          startPage: startPage,
          endPage: endPage,
          startIndex: startIndex,
          endIndex: endIndex,
          pages: pages
        };
    }

  render() {
      var pager = this.state.pager;

      if (!pager.pages || pager.pages.length <= 1) {
          // don't display pager if there is only 1 page
          return null;
        }
     console.log(this.state.pageSize)
      return (
            <div className="row page">
                <div  className="itemlength col-md-3 col-sm-3 col-xs-3">
                    <select className="custom-select" 
                        value={this.state.size} 
                        name="size"
                        onChange={this.handleChange}>

                        <option value="20">show-20</option>
                        <option value="40">show-40</option>
                        <option value="60">show-60</option>
                        <option value="80">show-80</option>
                        <option value="100">show-100</option>
                        <option value="500">show-500</option>
                    </select>
                </div>

                <Pagination size="sm" className="col-md-9 col-sm-9 col-xs-9">
    
                    <PaginationItem className={pager.currentPage === 1 ? 'disabled' : ''}>
                        <PaginationLink  onClick={() => this.setPage(1)}>First</PaginationLink>
                    </PaginationItem>
                        
                    <PaginationItem className={pager.currentPage === 1 ? 'disabled' : ''}>
                        <PaginationLink  onClick={() => this.setPage(pager.currentPage - 1)}>Previous</PaginationLink>
                    </PaginationItem>
                        
                    {pager.pages.map((page, index) =>
                     <PaginationItem key={index} className={pager.currentPage === page ? 'active' : ''}>
                        <PaginationLink  onClick={() => this.setPage(page)}>{page}</PaginationLink>
                     </PaginationItem>
                    )}
                        
                    <PaginationItem className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                        <PaginationLink  onClick={() => this.setPage(pager.currentPage + 1)}>Next</PaginationLink>
                    </PaginationItem>
                        
                    <PaginationItem className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                        <PaginationLink  onClick={() => this.setPage(pager.totalPages)}>Last</PaginationLink>
                    </PaginationItem>
                   
                </Pagination>
            
            </div>
        );
    }
}



export default ItemPagination