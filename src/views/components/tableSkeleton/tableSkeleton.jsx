import { Skeleton, Table, Tbody, Td, Tr } from '@chakra-ui/react'

function TableSkeleton() {
  return (
    <Table>
      <Tbody>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i, index) => (
          <Tr key={'loading-order' + index}>
            <Td>
              <Skeleton height='20px' />
            </Td>
            <Td>
              <Skeleton height='20px' />
            </Td>
            <Td>
              <Skeleton height='20px' />
            </Td>
            <Td>
              <Skeleton height='20px' />
            </Td>
            <Td>
              <Skeleton height='20px' />
            </Td>
            <Td>
              <Skeleton height='20px' />
            </Td>
            <Td>
              <Skeleton height='20px' />
            </Td>
            <Td>
              <Skeleton height='20px' />
            </Td>
            <Td>
              <Skeleton height='20px' />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default TableSkeleton
