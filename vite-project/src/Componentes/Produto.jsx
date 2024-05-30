// import styles from './Produtos.module.css'
import { Card, SimpleGrid, CardHeader, Button, Heading, Text, CardBody, CardFooter } from '@chakra-ui/react'


export function Produto() {
  return (

    <div>
  
  <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(600px, 1fr))'>
  <Card display='flex' justifyContent='space-between' margin='90px' backgroundColor="#fff" borderRadius='30px'>
    <CardHeader>
    <img src='https://static.paodeacucar.com/img/uploads/1/349/607349.png' width='250px'></img>
      <Heading size='md'>   
    </Heading>
    </CardHeader>
    
    <CardBody>
      
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter display='flex' justifyContent='center' alignItems='center' marginBottom='40px'>
      <Button>View here</Button>
    </CardFooter>
  </Card>


  <Card display='flex' justifyContent='space-between' margin='90px' backgroundColor="#fff" borderRadius='30px'>
    <CardHeader>
    <img src='https://static.paodeacucar.com/img/uploads/1/349/607349.png' width='250px'></img>

      <Heading size='md'> Galinha Caipira</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter display='flex' justifyContent='center' alignItems='center' marginBottom='40px'>
      <Button  >View here</Button>
    </CardFooter>
  </Card>
  <Card display='flex' justifyContent='space-between' margin='90px' backgroundColor="#fff" borderRadius='30px' >
    <CardHeader>
    <img src='https://static.paodeacucar.com/img/uploads/1/349/607349.png' width='250px'></img>

      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter display='flex' justifyContent='center' alignItems='center' marginBottom='40px'  >
      <Button color='pink'border='2px solid pink' borderRadius='20px' padding='10px' >View here</Button>
    </CardFooter>
  </Card>
</SimpleGrid>

    </div>
   


  )
}
