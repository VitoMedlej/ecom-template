import { Box, IconButton, Typography } from '@mui/material'
import {RemoveRedEye,DeleteForever} from '@mui/icons-material';
import { QuantityPicker } from 'react-qty-picker';
import Btn from '../Btn/Btn';



const CartProduct = () => {
    return (
    <Box sx={{borderTop:'1px solid #0000001a',flex:1}}>
        <Box
            className="trans"
            sx={{
                display:'flex',
                gap:'1em',
            flex:1,
            padding: '1em',
            ':hover': {
                backgroundColor: '#0000000f',
                borderRadius: '6px'
            }
        }}>
            <Box
                sx={{
                mr: '.5em',
                width: '100px',
                height: '100px',
                borderRadius: '6px'
            }}>
                <img
                    style={{
                    borderRadius: '6px'
                }}
                    src="https://ucarecdn.com/7749acdb-9ab3-4411-8a1d-c0c0b5749a2f/"
                    className='img'
                    alt=""/>
            </Box>
            <Box sx={{display:'flex',width:'100%'}}>

                <Box>

                    <Typography
                        sx={{
                        margin: 0,
                        cursor:'pointer',
                        fontWeight: '600',
                        fontSize:'1.3em'
                    }}>
                        Addidas shoes 40e
                    </Typography>
                    <h2
                        style={{
                        fontSize: '1em',
                        fontWeight: '500',
                        // color: 'green',
                        margin: ' .35em 0 0 0'
                    }}>
                        $200
                    </h2>
                    {/* <h2
                        style={{
                        fontSize: '1.2em',
                        color: 'gray',
                        fontWeight: '500',
                        margin: ' .25em 0 0 0'
                    }}>
                        Qty: 1
                    </h2> */}
                  
                   
                    <Btn v2={true} sx={{border:'none',padding:0,mx:0,mt:1,':hover':{background:'white'},fontSize:'.6em'}}>
                        <Typography sx={{pt:'.1em',fontWeight:'600',fontSize:'1em'}}>
                            
                        Remove
                        </Typography>
                        <DeleteForever sx={{fontSize:'1.5em'}}/> 
                    </Btn>
                    
                </Box>
                <Box
                    sx={{
                    flex: 1,
                    flexGrow: '100%',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    height: '100%',
                    flexDirection: 'column',
                    alignItems: 'end'
                }}>
                    {/* <IconButton>
                        <DeleteForever
                            fontSize='medium'
                            sx={{
                            color: '#ff2b2b'
                        }}/>
                    </IconButton>
                    <IconButton>
                        <RemoveRedEye
                            fontSize='medium'
                            sx={{
                            color: '#373737'
                        }}/>

                    </IconButton> */}
                    <QuantityPicker min={1} max={10} value={1}/>
                </Box>
            </Box>
        </Box>
    </Box>

    )
}

export default CartProduct