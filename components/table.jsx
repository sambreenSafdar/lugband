'use client';
import { useEffect, useRef, useState } from 'react';
import { Input } from './ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import Pagination from './pagination';
import { CSelect } from './select';
import { Button } from './ui/button';
import {
  BellRingIcon,
  BoxIcon,
  CheckIcon,
  PlusIcon,
  ScanBarcodeIcon,
  SearchIcon,
} from 'lucide-react';
import { Label } from './ui/label';
import Image from 'next/image';

const headers = [
  {
    Header: 'Reciept No',
    accessor: 'receipt',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Mobile Number',
    accessor: 'mobile',
  },
  {
    Header: 'No of Tags',
    accessor: 'tags',
  },
  {
    Header: 'Actions',
    accessor: 'actions',
  },
];

const dummyData = [
  {
    id: 1,
    receipt: (
      <div className="flex items-center gap-4">
        <Image src="/reciept.svg" alt="traxpk reciept" width={48} height={48} />
        <div>
          <p className="text-sm">102234599223</p>
          <p className="text-xs text-gray-400">10/18/2023 - 11:00:05</p>
        </div>
      </div>
    ),
    name: 'John Doe',
    mobile: 18824587899,
    tags: '1 tags',
    no: '102234599223',
    status: 'unclaimed',
  },
  {
    id: 2,
    receipt: (
      <div className="flex items-center gap-4">
        <Image src="/reciept.svg" alt="traxpk reciept" width={48} height={48} />
        <div>
          <p className="text-sm">102234581224</p>
          <p className="text-xs text-gray-400">10/18/2023 - 11:00:05</p>
        </div>
      </div>
    ),
    name: 'John Doe',
    mobile: 18824587899,
    tags: '1 tags',
    no: '102234581224',
    status: 'unclaimed',
  },
  {
    id: 3,
    receipt: (
      <div className="flex items-center gap-4">
        <Image src="/reciept.svg" alt="traxpk reciept" width={48} height={48} />
        <div>
          <p className="text-sm">102234581225</p>
          <p className="text-xs text-gray-400">10/18/2023 - 11:00:05</p>
        </div>
      </div>
    ),
    name: 'John Doe',
    mobile: 18824587899,
    tags: '1 tags',
    no: '102234581225',
    status: 'unclaimed',
  },
  {
    id: 4,
    receipt: (
      <div className="flex items-center gap-4">
        <Image src="/reciept.svg" alt="traxpk reciept" width={48} height={48} />
        <div>
          <p className="text-sm">102234581226</p>
          <p className="text-xs text-gray-400">10/18/2023 - 11:00:05</p>
        </div>
      </div>
    ),
    name: 'John Doe',
    mobile: 18824587899,
    tags: '1 tags',
    no: '102234581226',
    status: 'delivered',
  },
  {
    id: 5,
    receipt: (
      <div className="flex items-center gap-4">
        <Image src="/reciept.svg" alt="traxpk reciept" width={48} height={48} />
        <div>
          <p className="text-sm">102234581227</p>
          <p className="text-xs text-gray-400">10/18/2023 - 11:00:05</p>
        </div>
      </div>
    ),
    name: 'John Doe',
    mobile: 18824587899,
    tags: '1 tags',
    no: '102234581227',
    status: 'unclaimed',
  },
  {
    id: 6,
    receipt: (
      <div className="flex items-center gap-4">
        <Image src="/reciept.svg" alt="traxpk reciept" width={48} height={48} />
        <div>
          <p className="text-sm">102234581228</p>
          <p className="text-xs text-gray-400">10/18/2023 - 11:00:05</p>
        </div>
      </div>
    ),
    name: 'John Doe',
    mobile: 18824587899,
    tags: '1 tags',
    no: '102234581228',
    status: 'unclaimed',
  },
  {
    id: 7,
    receipt: (
      <div className="flex items-center gap-4">
        <Image src="/reciept.svg" alt="traxpk reciept" width={48} height={48} />
        <div>
          <p className="text-sm">102234581229</p>
          <p className="text-xs text-gray-400">10/18/2023 - 11:00:05</p>
        </div>
      </div>
    ),
    name: 'John Doe',
    mobile: 18824587899,
    tags: '1 tags',
    no: '102234581229',
    status: 'notify',
  },
  {
    id: 8,
    receipt: (
      <div className="flex items-center gap-4">
        <Image src="/reciept.svg" alt="traxpk reciept" width={48} height={48} />
        <div>
          <p className="text-sm">102234581223</p>
          <p className="text-xs text-gray-400">10/18/2023 - 11:00:05</p>
        </div>
      </div>
    ),
    name: 'John Doe',
    mobile: 18824587899,
    tags: '1 tags',
    no: '102234581223',
    status: 'delivered',
  },
  {
    id: 9,
    receipt: (
      <div className="flex items-center gap-4">
        <Image src="/reciept.svg" alt="traxpk reciept" width={48} height={48} />
        <div>
          <p className="text-sm">102234581223</p>
          <p className="text-xs text-gray-400">10/18/2023 - 11:00:05</p>
        </div>
      </div>
    ),
    name: 'John Doe',
    mobile: 18824587899,
    tags: '1 tags',
    no: '102234581223',
    status: 'notify',
  },
  {
    id: 10,
    receipt: (
      <div className="flex items-center gap-4">
        <Image src="/reciept.svg" alt="traxpk reciept" width={48} height={48} />
        <div>
          <p className="text-sm">102234581223</p>
          <p className="text-xs text-gray-400">10/18/2023 - 11:00:05</p>
        </div>
      </div>
    ),
    name: 'John Doe',
    mobile: 18824587899,
    tags: '1 tags',
    no: '102234581223',
    status: 'notify',
  },
  {
    id: 11,
    receipt: (
      <div className="flex items-center gap-4">
        <Image src="/reciept.svg" alt="traxpk reciept" width={48} height={48} />
        <div>
          <p className="text-sm">102234581223</p>
          <p className="text-xs text-gray-400">10/18/2023 - 11:00:05</p>
        </div>
      </div>
    ),
    name: 'John Doe',
    mobile: 18824587899,
    tags: '1 tags',
    no: '102234581223',
    status: 'delivered',
  },
  {
    id: 12,
    receipt: (
      <div className="flex items-center gap-4">
        <Image src="/reciept.svg" alt="traxpk reciept" width={48} height={48} />
        <div>
          <p className="text-sm">102234581223</p>
          <p className="text-xs text-gray-400">10/18/2023 - 11:00:05</p>
        </div>
      </div>
    ),
    name: 'John Doe',
    mobile: 18824587899,
    tags: '1 tags',
    no: '102234581223',
    status: 'delivered',
  },
  {
    id: 13,
    receipt: (
      <div className="flex items-center gap-4">
        <Image src="/reciept.svg" alt="traxpk reciept" width={48} height={48} />
        <div>
          <p className="text-sm">102234581223</p>
          <p className="text-xs text-gray-400">10/18/2023 - 11:00:05</p>
        </div>
      </div>
    ),
    name: 'John Doe',
    mobile: 18824997899,
    tags: '1 tags',
    no: '102234581223',
    status: 'delivered',
  },
  {
    id: 14,
    receipt: (
      <div className="flex items-center gap-4">
        <Image src="/reciept.svg" alt="traxpk reciept" width={48} height={48} />
        <div>
          <p className="text-sm">102999581223</p>
          <p className="text-xs text-gray-400">10/18/2023 - 11:00:05</p>
        </div>
      </div>
    ),
    name: 'John Doe',
    mobile: 18824587899,
    tags: '1 tags',
    no: '102999581223',
    status: 'unclaimed',
  },
  {
    id: 15,
    receipt: (
      <div className="flex items-center gap-4">
        <Image src="/reciept.svg" alt="traxpk reciept" width={48} height={48} />
        <div>
          <p className="text-sm">102234585511</p>
          <p className="text-xs text-gray-400">10/18/2023 - 11:00:05</p>
        </div>
      </div>
    ),
    name: 'John Doe',
    mobile: 18824587899,
    tags: '1 tags',
    no: '102234585511',
    status: 'delivered',
  },
  {
    id: 16,
    receipt: (
      <div className="flex items-center gap-4">
        <Image src="/reciept.svg" alt="traxpk reciept" width={48} height={48} />
        <div>
          <p className="text-sm">102234587777</p>
          <p className="text-xs text-gray-400">10/18/2023 - 11:00:05</p>
        </div>
      </div>
    ),
    name: 'John Doe',
    mobile: 18824587899,
    tags: '1 tags',
    no: '102234587777',
    status: 'delivered',
  },
  {
    id: 17,
    receipt: (
      <div className="flex items-center gap-4">
        <Image src="/reciept.svg" alt="traxpk reciept" width={48} height={48} />
        <div>
          <p className="text-sm">102234586666</p>
          <p className="text-xs text-gray-400">10/18/2023 - 11:00:05</p>
        </div>
      </div>
    ),
    name: 'John Doe',
    mobile: 18824587899,
    tags: '1 tags',
    no: '102234586666',
    status: 'delivered',
  },
  {
    id: 18,
    receipt: (
      <div className="flex items-center gap-4">
        <Image src="/reciept.svg" alt="traxpk reciept" width={48} height={48} />
        <div>
          <p className="text-sm">102234589999</p>
          <p className="text-xs text-gray-400">10/18/2023 - 11:00:05</p>
        </div>
      </div>
    ),
    name: 'John Doe',
    mobile: 18824587899,
    tags: '1 tags',
    no: '102234589999',
    status: 'unclaimed',
  },
];

const TableComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [type, setType] = useState('unclaimed');
  const [drawer, setDrawer] = useState(false);
  const drawerRef = useRef(null);

  let filteredData = dummyData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.no.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.mobile.toString().includes(searchTerm.toString())
  );

  filteredData = filteredData.filter(
    (item) =>
      (type === 'unclaimed' && item.status === 'unclaimed') ||
      (type === 'delivered' && item.status === 'delivered') ||
      (type === 'notify' && item.status === 'notify')
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  const handleType = (value) => {
    setType(value);
  };

  const handleStatus = (value) => {
    console.log(value);
    if (value === 'unclaimed') {
      setDrawer(true);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setDrawer(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [drawerRef]);

  return (
    <div className="">
      <div className="grid grid-cols-12 gap-4 mb-3 border-b border-gray-300 pb-4">
        <div className="col-span-4">
          <div className="flex gap-4 w-full">
            <div className="relative flex items-center w-full">
              <SearchIcon className="absolute w-[18px] h-[18px] left-3 text-gray-500" />
              <Input
                type="text"
                placeholder="Search..."
                className="pl-9 outline-none focus-vi:ring-0 focus:box-shadow-none rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-48">
              <CSelect
                className="rounded-lg"
                value={type}
                onChange={handleType}
                options={['unclaimed', 'delivered', 'notify']}
              />
            </div>
          </div>
        </div>
        <div className="col-span-8">
          <div className="flex items-center justify-end gap-4">
            <Label className="font-normal text-gray-500">Rows per page</Label>
            <div className="w-16">
              <CSelect
                value={itemsPerPage}
                className="rounded-lg"
                options={[5, 10, 20, 30, 50]}
                onChange={handleItemsPerPageChange}
              />
            </div>
            <Pagination
              currentPage={currentPage}
              totalCount={filteredData.length}
              itemsPerPage={itemsPerPage}
              onPageChange={handlePageChange}
            />
            <Button className="rounded-full bg-gradient-to-r from-[#FF551F] to-[#E12B62]">
              <PlusIcon className="w-4 h-4 mr-2" />
              Add Bag
            </Button>
          </div>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            {headers.map((header) => (
              <TableHead
                className={`text-[#0B6D56] ${
                  header.Header === 'Actions' && 'text-end pr-10'
                }`}
                key={header.accessor}
              >
                {header.Header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {paginatedData.map((item) => (
            <TableRow
              key={item.id}
              className="bg-white rounded-full hover:bg-gray-100 border-b-8 border-gray-200 w-full"
            >
              <TableCell className="font-medium">{item.receipt}</TableCell>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.mobile}</TableCell>
              <TableCell>{item.tags}</TableCell>
              <TableCell className="text-right">
                <div className="flex items-center gap-20 justify-end">
                  {item.status === 'delivered' && (
                    <div className="flex items-center">
                      <CheckIcon className="w-4 h-4 mr-2 text-green-500" />
                      Notified
                    </div>
                  )}
                  <Button
                    className="rounded-full"
                    variant="outline"
                    size=""
                    onClick={() => handleStatus(item.status)}
                  >
                    {item.status === 'unclaimed' && (
                      <>
                        <ScanBarcodeIcon className="w-4 h-4 mr-2 text-red-500" />
                        Claim
                      </>
                    )}
                    {item.status === 'notify' && (
                      <>
                        <BellRingIcon className="w-4 h-4 mr-2 text-red-500" />
                        Notify
                      </>
                    )}
                    {item.status === 'delivered' && (
                      <>
                        <BoxIcon className="w-4 h-4 mr-2 text-green-500" />
                        Delivered
                      </>
                    )}
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div
        ref={drawerRef}
        id="drawer"
        className={`fixed right-0 w-[400px] top-0 h-full overflow-y-auto bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
          !drawer && ' translate-x-full'
        }`}
      >
        <div className="max-w-[400px] p-4">
          <div className="flex w-full justify-between flex-col min-h-[92vh]">
            <div>
              <h2 className="text-lg font-semibold">Tag Claim</h2>
              <p className="text-xs text-[#4B5D63] mt-2 mb-10">
                Scan the barcode from the sticker or place it near the RFID
                reader. Successful scan will turn green.
              </p>
              <div className="flex items-center justify-between px-4 border border-[#0aae1b] py-3">
                <div className="border-r pr-14">
                  <Image src="/qr.png" alt="qr" width={213} height={106} />
                </div>
                <Button
                  size="icon"
                  className="bg-gradient-to-r from-[#0AAE1B] to-[#61C015] rounded-full"
                >
                  <CheckIcon />
                </Button>
              </div>
              <div className="flex items-center justify-between px-4 border py-3 mt-3">
                <div className="border-r pr-14">
                  <Image src="/qr.png" alt="qr" width={213} height={106} />
                </div>
                <Button size="icon" className="bg-gray-200 rounded-full">
                  <CheckIcon />
                </Button>
              </div>
            </div>
            <div className="text-center">
              <p className="text-[#4B5D63] text-sm mb-3">
                1/2 Tags successfully claimed
              </p>
              <Button disabled variant="outline" className="rounded-full">
                Complete Claim
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
