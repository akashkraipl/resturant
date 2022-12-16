import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function About() {
    return (

        <Grid container spacing={2} style={{ padding: "20px" }}>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="h3" component="div" align="center" >
                            About Us
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis itaque, recusandae quae labore repellat dicta nemo, quasi sint unde consequuntur omnis officiis beatae! Rem labore eius reprehenderit. Nobis, consectetur possimus. Error, voluptatum! Sapiente eveniet amet quibusdam, culpa mollitia harum recusandae expedita architecto quae, praesentium vero quam perferendis illum accusamus.

                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis itaque, recusandae quae labore repellat dicta nemo, quasi sint unde consequuntur omnis officiis beatae! Rem labore eius reprehenderit. Nobis, consectetur possimus. Error, voluptatum! Sapiente eveniet amet quibusdam, culpa mollitia harum recusandae expedita architecto quae, praesentium vero quam perferendis illum accusamus.
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis itaque, recusandae quae labore repellat dicta nemo, quasi sint unde consequuntur omnis officiis beatae! Rem labore eius reprehenderit. Nobis, consectetur possimus. Error, voluptatum! Sapiente eveniet amet quibusdam, culpa mollitia harum recusandae expedita architecto quae, praesentium vero quam perferendis illum accusamus.dfgdfgdfgdfg;kdaglahgad d gdgh ;gdh aghg;aooh iog agfadgh
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis itaque, recusandae quae labore repellat dicta nemo, quasi sint unde consequuntur omnis officiis beatae! Rem labore eius reprehenderit. Nobis, consectetur possimus. Error, voluptatum! Sapiente eveniet amet quibusdam, culpa mollitia harum recusandae expedita architecto quae, praesentium vero quam perferendis illum accusamus.
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis itaque, recusandae quae labore repellat dicta nemo, quasi sint unde consequuntur omnis officiis beatae! Rem labore eius reprehenderit. Nobis, consectetur possimus. Error, voluptatum! Sapiente eveniet amet quibusdam, culpa mollitia harum recusandae expedita architecto quae, praesentium vero quam perferendis illum accusamus.dfgdfgdfgdfg;kdaglahgad d gdgh ;gdh aghg;aooh iog agfadgh
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis itaque, recusandae quae labore repellat dicta nemo, quasi sint unde consequuntur omnis officiis beatae! Rem labore eius reprehenderit. Nobis, consectetur possimus. Error, voluptatum! Sapiente eveniet amet quibusdam, culpa mollitia harum recusandae expedita architecto quae, praesentium vero quam perferendis illum accusamus.
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis itaque, recusandae quae labore repellat dicta nemo, quasi sint unde consequuntur omnis officiis beatae! Rem labore eius reprehenderit. Nobis, consectetur possimus. Error, voluptatum! Sapiente eveniet amet quibusdam, culpa mollitia harum recusandae expedita architecto quae, praesentium vero quam perferendis illum accusamus.dfgdfgdfgdfg;kdaglahgad d gdgh ;gdh aghg;aooh iog agfadgh
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis itaque, recusandae quae labore repellat dicta nemo, quasi sint unde consequuntur omnis officiis beatae! Rem labore eius reprehenderit. Nobis, consectetur possimus. Error, voluptatum! Sapiente eveniet amet quibusdam, culpa mollitia harum recusandae expedita architecto quae, praesentium vero quam perferendis illum accusamus.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <ButtonBase>
                    <Img alt="complex" src="https://mui.com/static/images/cards/paella.jpg" style={{ width: "500px", height: "600px", borderRadius: "5px" }} />
                </ButtonBase>
            </Grid>
        </Grid>
    );
}
